var app = require("application");
var enums = require("ui/enums");
var pageCommon = require("./page-common");
var platform = require("platform");
var style = require("ui/styling/style");
var actionBar = require("ui/action-bar");
var gridLayout = require("ui/layouts/grid-layout");
var colorModule = require("color");
global.moduleMerge(pageCommon, exports);
var trace;
function ensureTrace() {
    if (!trace) {
        trace = require("trace");
    }
}
var color;
function ensureColor() {
    if (!color) {
        color = require("color");
    }
}
exports.DIALOG_FRAGMENT_TAG = "dialog";
var SYSTEM_UI_FLAG_LIGHT_STATUS_BAR = 0x00002000;
var STATUS_BAR_LIGHT_BCKG = "#F5F5F5";
var STATUS_BAR_DARK_BCKG = "#66000000";
var DialogFragmentClass;
function ensureDialogFragmentClass() {
    if (DialogFragmentClass) {
        return;
    }
    var DialogFragmentClassInner = (function (_super) {
        __extends(DialogFragmentClassInner, _super);
        function DialogFragmentClassInner(_owner, _fullscreen, _shownCallback, _dismissCallback) {
            _super.call(this);
            this._owner = _owner;
            this._fullscreen = _fullscreen;
            this._shownCallback = _shownCallback;
            this._dismissCallback = _dismissCallback;
            return global.__native(this);
        }
        DialogFragmentClassInner.prototype.onCreateDialog = function (savedInstanceState) {
            var dialog = new android.app.Dialog(this._owner._context);
            dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
            this._owner.horizontalAlignment = this._fullscreen ? enums.HorizontalAlignment.stretch : enums.HorizontalAlignment.center;
            this._owner.verticalAlignment = this._fullscreen ? enums.VerticalAlignment.stretch : enums.VerticalAlignment.center;
            this._owner.actionBarHidden = true;
            dialog.setContentView(this._owner._nativeView, this._owner._nativeView.getLayoutParams());
            var window = dialog.getWindow();
            window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            if (this._fullscreen) {
                window.setLayout(android.view.ViewGroup.LayoutParams.FILL_PARENT, android.view.ViewGroup.LayoutParams.FILL_PARENT);
            }
            return dialog;
        };
        DialogFragmentClassInner.prototype.onStart = function () {
            _super.prototype.onStart.call(this);
            if (!this._owner.isLoaded) {
                this._owner.onLoaded();
            }
            this._shownCallback();
        };
        DialogFragmentClassInner.prototype.onDestroyView = function () {
            _super.prototype.onDestroyView.call(this);
            if (this._owner.isLoaded) {
                this._owner.onUnloaded();
            }
            this._owner._isAddedToNativeVisualTree = false;
            this._owner._onDetached(true);
        };
        DialogFragmentClassInner.prototype.onDismiss = function (dialog) {
            _super.prototype.onDismiss.call(this, dialog);
            this._dismissCallback();
        };
        return DialogFragmentClassInner;
    }(android.app.DialogFragment));
    ;
    DialogFragmentClass = DialogFragmentClassInner;
}
var Page = (function (_super) {
    __extends(Page, _super);
    function Page() {
        _super.apply(this, arguments);
        this._isBackNavigation = false;
    }
    Object.defineProperty(Page.prototype, "android", {
        get: function () {
            return this._grid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Page.prototype, "_nativeView", {
        get: function () {
            return this._grid;
        },
        enumerable: true,
        configurable: true
    });
    Page.prototype._createUI = function () {
        this._grid = new org.nativescript.widgets.GridLayout(this._context);
        this._grid.addRow(new org.nativescript.widgets.ItemSpec(1, org.nativescript.widgets.GridUnitType.auto));
        this._grid.addRow(new org.nativescript.widgets.ItemSpec(1, org.nativescript.widgets.GridUnitType.star));
    };
    Page.prototype._addViewToNativeVisualTree = function (child, atIndex) {
        if (this._nativeView && child._nativeView) {
            if (child instanceof actionBar.ActionBar) {
                gridLayout.GridLayout.setRow(child, 0);
                child.horizontalAlignment = enums.HorizontalAlignment.stretch;
                child.verticalAlignment = enums.VerticalAlignment.top;
            }
            else {
                gridLayout.GridLayout.setRow(child, 1);
            }
        }
        return _super.prototype._addViewToNativeVisualTree.call(this, child, atIndex);
    };
    Page.prototype._onDetached = function (force) {
        var skipDetached = !force && this.frame.android.cachePagesOnNavigate && !this._isBackNavigation;
        if (skipDetached) {
            ensureTrace();
            if (trace.enabled) {
                trace.write("Caching " + this, trace.categories.NativeLifecycle);
            }
        }
        else {
            _super.prototype._onDetached.call(this);
        }
    };
    Page.prototype.onNavigatedFrom = function (isBackNavigation) {
        this._isBackNavigation = isBackNavigation;
        _super.prototype.onNavigatedFrom.call(this, isBackNavigation);
    };
    Page.prototype._showNativeModalView = function (parent, context, closeCallback, fullscreen) {
        var _this = this;
        _super.prototype._showNativeModalView.call(this, parent, context, closeCallback, fullscreen);
        if (!this.backgroundColor) {
            ensureColor();
            this.backgroundColor = new color.Color("White");
        }
        this._onAttached(parent._context);
        this._isAddedToNativeVisualTree = true;
        this._syncNativeProperties();
        ensureDialogFragmentClass();
        this._dialogFragment = new DialogFragmentClass(this, !!fullscreen, function () { return _this._raiseShownModallyEvent(); }, function () { return _this.closeModal(); });
        _super.prototype._raiseShowingModallyEvent.call(this);
        this._dialogFragment.show(parent.frame.android.activity.getFragmentManager(), exports.DIALOG_FRAGMENT_TAG);
    };
    Page.prototype._hideNativeModalView = function (parent) {
        this._dialogFragment.dismissAllowingStateLoss();
        this._dialogFragment = null;
        parent._modal = undefined;
        _super.prototype._hideNativeModalView.call(this, parent);
    };
    Page.prototype._updateActionBar = function () {
        this.actionBar.update();
    };
    Page.prototype._updateStatusBar = function () {
        this._updateStatusBarStyle(this.statusBarStyle);
        this._updateStatusBarBackground();
    };
    Page.prototype._updateStatusBarStyle = function (value) {
        if (value && platform.device.sdkVersion >= "23") {
            var window = app.android.startActivity.getWindow();
            var decorView = window.getDecorView();
            if (value === enums.StatusBarStyle.light) {
                var nativeColor = new colorModule.Color(STATUS_BAR_LIGHT_BCKG).android;
                window.setStatusBarColor(nativeColor);
                decorView.setSystemUiVisibility(SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);
            }
            else {
                var nativeColor = new colorModule.Color(STATUS_BAR_DARK_BCKG).android;
                window.setStatusBarColor(nativeColor);
                decorView.setSystemUiVisibility(0);
            }
        }
    };
    Page.prototype._updateStatusBarBackground = function () {
        if (this.androidStatusBarBackground && platform.device.sdkVersion >= "23") {
            var window = app.android.startActivity.getWindow();
            var nativeColor = this.androidStatusBarBackground.android;
            window.setStatusBarColor(nativeColor);
        }
    };
    return Page;
}(pageCommon.Page));
exports.Page = Page;
var PageStyler = (function () {
    function PageStyler() {
    }
    PageStyler.setStatusBarStyleProperty = function (v, newValue) {
        var page = v;
        page._updateStatusBarStyle(newValue);
    };
    PageStyler.resetStatusBarStyleProperty = function (v, nativeValue) {
        var page = v;
        page._updateStatusBarStyle(nativeValue);
    };
    PageStyler.getStatusBarStyleProperty = function (v) {
        var page = v;
        return page.statusBarStyle;
    };
    PageStyler.setAndroidStatusBarBackgroundProperty = function (v, newValue) {
        if (platform.device.sdkVersion >= "21") {
            var window = app.android.startActivity.getWindow();
            var nativeColor = new colorModule.Color(newValue).android;
            window.setStatusBarColor(nativeColor);
        }
    };
    PageStyler.resetAndroidStatusBarBackgroundProperty = function (v, nativeValue) {
        if (platform.device.sdkVersion >= "21") {
            var window = app.android.startActivity.getWindow();
            var nativeColor = (nativeValue instanceof colorModule.Color) ? nativeValue.android : new colorModule.Color(nativeValue).android;
            window.setStatusBarColor(nativeColor);
        }
    };
    PageStyler.getAndroidStatusBarBackgroundProperty = function (v) {
        var page = v;
        return page.androidStatusBarBackground;
    };
    PageStyler.registerHandlers = function () {
        style.registerHandler(style.statusBarStyleProperty, new style.StylePropertyChangedHandler(PageStyler.setStatusBarStyleProperty, PageStyler.resetStatusBarStyleProperty, PageStyler.getStatusBarStyleProperty), "Page");
        style.registerHandler(style.androidStatusBarBackgroundProperty, new style.StylePropertyChangedHandler(PageStyler.setAndroidStatusBarBackgroundProperty, PageStyler.resetAndroidStatusBarBackgroundProperty, PageStyler.getAndroidStatusBarBackgroundProperty), "Page");
    };
    return PageStyler;
}());
exports.PageStyler = PageStyler;
PageStyler.registerHandlers();
//# sourceMappingURL=page.js.map
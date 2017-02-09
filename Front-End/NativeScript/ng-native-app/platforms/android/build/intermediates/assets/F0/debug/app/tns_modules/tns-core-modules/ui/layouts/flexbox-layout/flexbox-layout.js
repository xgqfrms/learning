function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var flexbox_layout_common_1 = require("./flexbox-layout-common");
var utils_1 = require("utils/utils");
function setLayoutParamsProperty(view, setter) {
    var nativeView = view._nativeView;
    if (nativeView) {
        var lp = nativeView.getLayoutParams() || new org.nativescript.widgets.FlexboxLayout.LayoutParams();
        if (lp instanceof org.nativescript.widgets.FlexboxLayout.LayoutParams) {
            setter(lp);
            nativeView.setLayoutParams(lp);
        }
    }
}
function _onNativeOrderPropertyChanged(view, newValue) {
    setLayoutParamsProperty(view, function (lp) { return lp.order = newValue; });
    if (view.parent && view.parent instanceof FlexboxLayout && view.parent.android) {
        view.parent.android.invalidateOrdersCache();
    }
}
exports._onNativeOrderPropertyChanged = _onNativeOrderPropertyChanged;
function _onNativeFlexGrowPropertyChanged(view, newValue) {
    setLayoutParamsProperty(view, function (lp) { return lp.flexGrow = newValue; });
}
exports._onNativeFlexGrowPropertyChanged = _onNativeFlexGrowPropertyChanged;
function _onNativeFlexShrinkPropertyChanged(view, newValue) {
    setLayoutParamsProperty(view, function (lp) { return lp.flexShrink = newValue; });
}
exports._onNativeFlexShrinkPropertyChanged = _onNativeFlexShrinkPropertyChanged;
function _onNativeAlignSelfPropertyChanged(view, newValue) {
    setLayoutParamsProperty(view, function (lp) { return lp.alignSelf = alignSelfMap[newValue]; });
}
exports._onNativeAlignSelfPropertyChanged = _onNativeAlignSelfPropertyChanged;
function _onNativeFlexWrapBeforePropertyChanged(view, newValue) {
    setLayoutParamsProperty(view, function (lp) { return lp.wrapBefore = newValue; });
}
exports._onNativeFlexWrapBeforePropertyChanged = _onNativeFlexWrapBeforePropertyChanged;
__export(require("./flexbox-layout-common"));
var FlexboxLayoutWidget = org.nativescript.widgets.FlexboxLayout;
var flexDirectionMap = (_a = {},
    _a[flexbox_layout_common_1.FlexDirection.ROW] = FlexboxLayoutWidget.FLEX_DIRECTION_ROW,
    _a[flexbox_layout_common_1.FlexDirection.ROW_REVERSE] = FlexboxLayoutWidget.FLEX_DIRECTION_ROW_REVERSE,
    _a[flexbox_layout_common_1.FlexDirection.COLUMN] = FlexboxLayoutWidget.FLEX_DIRECTION_COLUMN,
    _a[flexbox_layout_common_1.FlexDirection.COLUMN_REVERSE] = FlexboxLayoutWidget.FLEX_DIRECTION_COLUMN_REVERSE,
    _a
);
var flexWrapMap = (_b = {},
    _b[flexbox_layout_common_1.FlexWrap.NOWRAP] = FlexboxLayoutWidget.FLEX_WRAP_NOWRAP,
    _b[flexbox_layout_common_1.FlexWrap.WRAP] = FlexboxLayoutWidget.FLEX_WRAP_WRAP,
    _b[flexbox_layout_common_1.FlexWrap.WRAP_REVERSE] = FlexboxLayoutWidget.FLEX_WRAP_WRAP_REVERSE,
    _b
);
var justifyContentMap = (_c = {},
    _c[flexbox_layout_common_1.JustifyContent.CENTER] = FlexboxLayoutWidget.JUSTIFY_CONTENT_CENTER,
    _c[flexbox_layout_common_1.JustifyContent.FLEX_END] = FlexboxLayoutWidget.JUSTIFY_CONTENT_FLEX_END,
    _c[flexbox_layout_common_1.JustifyContent.FLEX_START] = FlexboxLayoutWidget.JUSTIFY_CONTENT_FLEX_START,
    _c[flexbox_layout_common_1.JustifyContent.SPACE_AROUND] = FlexboxLayoutWidget.JUSTIFY_CONTENT_SPACE_AROUND,
    _c[flexbox_layout_common_1.JustifyContent.SPACE_BETWEEN] = FlexboxLayoutWidget.JUSTIFY_CONTENT_SPACE_BETWEEN,
    _c
);
var alignItemsMap = (_d = {},
    _d[flexbox_layout_common_1.AlignItems.BASELINE] = FlexboxLayoutWidget.ALIGN_ITEMS_BASELINE,
    _d[flexbox_layout_common_1.AlignItems.CENTER] = FlexboxLayoutWidget.ALIGN_ITEMS_CENTER,
    _d[flexbox_layout_common_1.AlignItems.FLEX_END] = FlexboxLayoutWidget.ALIGN_ITEMS_FLEX_END,
    _d[flexbox_layout_common_1.AlignItems.FLEX_START] = FlexboxLayoutWidget.ALIGN_ITEMS_FLEX_START,
    _d[flexbox_layout_common_1.AlignItems.STRETCH] = FlexboxLayoutWidget.ALIGN_ITEMS_STRETCH,
    _d
);
var alignContentMap = (_e = {},
    _e[flexbox_layout_common_1.AlignContent.CENTER] = FlexboxLayoutWidget.ALIGN_CONTENT_CENTER,
    _e[flexbox_layout_common_1.AlignContent.FLEX_END] = FlexboxLayoutWidget.ALIGN_CONTENT_FLEX_END,
    _e[flexbox_layout_common_1.AlignContent.FLEX_START] = FlexboxLayoutWidget.ALIGN_CONTENT_FLEX_START,
    _e[flexbox_layout_common_1.AlignContent.SPACE_AROUND] = FlexboxLayoutWidget.ALIGN_CONTENT_SPACE_AROUND,
    _e[flexbox_layout_common_1.AlignContent.SPACE_BETWEEN] = FlexboxLayoutWidget.ALIGN_CONTENT_SPACE_BETWEEN,
    _e[flexbox_layout_common_1.AlignContent.STRETCH] = FlexboxLayoutWidget.ALIGN_CONTENT_STRETCH,
    _e
);
var alignSelfMap = (_f = {},
    _f[flexbox_layout_common_1.AlignSelf.AUTO] = FlexboxLayoutWidget.LayoutParams.ALIGN_SELF_AUTO,
    _f[flexbox_layout_common_1.AlignSelf.FLEX_START] = FlexboxLayoutWidget.LayoutParams.ALIGN_SELF_FLEX_START,
    _f[flexbox_layout_common_1.AlignSelf.FLEX_END] = FlexboxLayoutWidget.LayoutParams.ALIGN_SELF_FLEX_END,
    _f[flexbox_layout_common_1.AlignSelf.CENTER] = FlexboxLayoutWidget.LayoutParams.ALIGN_SELF_CENTER,
    _f[flexbox_layout_common_1.AlignSelf.BASELINE] = FlexboxLayoutWidget.LayoutParams.ALIGN_SELF_BASELINE,
    _f[flexbox_layout_common_1.AlignSelf.STRETCH] = FlexboxLayoutWidget.LayoutParams.ALIGN_SELF_STRETCH,
    _f
);
var FlexboxLayout = (function (_super) {
    __extends(FlexboxLayout, _super);
    function FlexboxLayout() {
        _super.call(this);
    }
    Object.defineProperty(FlexboxLayout.prototype, "android", {
        get: function () { return this._layout; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexboxLayout.prototype, "_nativeView", {
        get: function () { return this._layout; },
        enumerable: true,
        configurable: true
    });
    FlexboxLayout.prototype._createUI = function () {
        this._layout = new org.nativescript.widgets.FlexboxLayout(this._context);
    };
    FlexboxLayout.prototype._invalidateOrdersCache = function () {
        this._nativeView.invalidateOrdersCache();
    };
    FlexboxLayout.prototype._setNativeFlexDirection = function (flexDirection) {
        var value = flexDirectionMap[flexDirection];
        this.android.setFlexDirection(value);
    };
    FlexboxLayout.prototype._setNativeFlexWrap = function (flexWrap) {
        this.android.setFlexWrap(flexWrapMap[flexWrap]);
    };
    FlexboxLayout.prototype._setNativeJustifyContent = function (justifyContent) {
        this.android.setJustifyContent(justifyContentMap[justifyContent]);
    };
    FlexboxLayout.prototype._setNativeAlignItems = function (alignItems) {
        this.android.setAlignItems(alignItemsMap[alignItems]);
    };
    FlexboxLayout.prototype._setNativeAlignContent = function (alignContent) {
        this.android.setAlignContent(alignContentMap[alignContent]);
    };
    return FlexboxLayout;
}(flexbox_layout_common_1.FlexboxLayoutBase));
exports.FlexboxLayout = FlexboxLayout;
function _setAndroidLayoutParams(lp, view) {
    lp.order = FlexboxLayout.getOrder(view);
    lp.flexGrow = FlexboxLayout.getFlexGrow(view);
    lp.flexShrink = FlexboxLayout.getFlexShrink(view);
    lp.alignSelf = alignSelfMap[FlexboxLayout.getAlignSelf(view)];
    lp.wrapBefore = FlexboxLayout.getFlexWrapBefore(view);
    lp.minWidth = utils_1.layout.toDevicePixels(view.minWidth);
    lp.minHeight = utils_1.layout.toDevicePixels(view.minHeight);
}
exports._setAndroidLayoutParams = _setAndroidLayoutParams;
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=flexbox-layout.js.map
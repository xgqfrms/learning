var common = require("./button-common");
var style = require("ui/styling/style");
var text_base_styler_1 = require("ui/text-base/text-base-styler");
var platform_1 = require("platform");
var gestures_1 = require("ui/gestures");
var view_1 = require("ui/core/view");
var styleHandlersInitialized;
global.moduleMerge(common, exports);
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        _super.call(this);
        this._isPressed = false;
        if (!styleHandlersInitialized) {
            styleHandlersInitialized = true;
            ButtonStyler.registerHandlers();
        }
    }
    Object.defineProperty(Button.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Button.prototype._createUI = function () {
        var that = new WeakRef(this);
        this._android = new android.widget.Button(this._context);
        this._android.setOnClickListener(new android.view.View.OnClickListener({
            get owner() {
                return that.get();
            },
            onClick: function (v) {
                if (this.owner) {
                    this.owner._emit(common.Button.tapEvent);
                }
            }
        }));
    };
    Button.prototype._onTextPropertyChanged = function (data) {
        if (this.android) {
            this.android.setText(data.newValue + "");
        }
    };
    Button.prototype._setFormattedTextPropertyToNative = function (value) {
        var newText = value ? value._formattedText : null;
        if (this.android) {
            if (newText) {
                if (!this._transformationMethod) {
                    this._transformationMethod = this.android.getTransformationMethod();
                }
                this.android.setTransformationMethod(null);
            }
            else {
                if (this._transformationMethod && !this.android.getTransformationMethod()) {
                    this.android.setTransformationMethod(this._transformationMethod);
                }
            }
            this.android.setText(newText);
        }
    };
    Button.prototype._updateHandler = function (subscribe) {
        var _this = this;
        if (subscribe) {
            this._highlightedHandler = this._highlightedHandler || (function (args) {
                switch (args.action) {
                    case gestures_1.TouchAction.up:
                        _this._goToVisualState("normal");
                        break;
                    case gestures_1.TouchAction.down:
                        _this._goToVisualState("highlighted");
                        break;
                }
            });
            this.on(gestures_1.GestureTypes.touch, this._highlightedHandler);
        }
        else {
            this.off(gestures_1.GestureTypes.touch, this._highlightedHandler);
        }
    };
    __decorate([
        view_1.PseudoClassHandler("normal", "highlighted", "pressed", "active")
    ], Button.prototype, "_updateHandler", null);
    return Button;
}(common.Button));
exports.Button = Button;
var ButtonStyler = (function () {
    function ButtonStyler() {
    }
    ButtonStyler.registerHandlers = function () {
        var TextBaseStyler = text_base_styler_1.TextBaseStyler;
        style.registerHandler(style.colorProperty, new style.StylePropertyChangedHandler(TextBaseStyler.setColorProperty, TextBaseStyler.resetColorProperty, TextBaseStyler.getNativeColorValue), "Button");
        style.registerHandler(style.fontInternalProperty, new style.StylePropertyChangedHandler(TextBaseStyler.setFontInternalProperty, TextBaseStyler.resetFontInternalProperty, TextBaseStyler.getNativeFontInternalValue), "Button");
        style.registerHandler(style.textAlignmentProperty, new style.StylePropertyChangedHandler(TextBaseStyler.setTextAlignmentProperty, TextBaseStyler.resetTextAlignmentProperty, TextBaseStyler.getNativeTextAlignmentValue), "Button");
        style.registerHandler(style.textDecorationProperty, new style.StylePropertyChangedHandler(TextBaseStyler.setTextDecorationProperty, TextBaseStyler.resetTextDecorationProperty), "Button");
        style.registerHandler(style.textTransformProperty, new style.StylePropertyChangedHandler(TextBaseStyler.setTextTransformProperty, TextBaseStyler.resetTextTransformProperty), "Button");
        style.registerHandler(style.whiteSpaceProperty, new style.StylePropertyChangedHandler(TextBaseStyler.setWhiteSpaceProperty, TextBaseStyler.resetWhiteSpaceProperty), "Button");
        if (parseInt(platform_1.device.sdkVersion, 10) >= 21) {
            style.registerHandler(style.letterSpacingProperty, new style.StylePropertyChangedHandler(TextBaseStyler.setLetterSpacingProperty, TextBaseStyler.resetLetterSpacingProperty, TextBaseStyler.getLetterSpacingProperty), "Button");
        }
    };
    return ButtonStyler;
}());
exports.ButtonStyler = ButtonStyler;
//# sourceMappingURL=button.js.map
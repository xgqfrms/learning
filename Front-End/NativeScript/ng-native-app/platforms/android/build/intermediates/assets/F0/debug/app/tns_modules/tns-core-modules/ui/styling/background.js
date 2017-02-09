var utils = require("utils/utils");
var common = require("./background-common");
var types = require("utils/types");
var cssValue = require("css-value");
var button;
var style;
function ensureLazyRequires() {
    if (!button) {
        button = require("ui/button");
    }
    if (!style) {
        style = require("./style");
    }
}
global.moduleMerge(common, exports);
var ad;
(function (ad) {
    var SDK;
    function getSDK() {
        if (!SDK) {
            SDK = android.os.Build.VERSION.SDK_INT;
        }
        return SDK;
    }
    var _defaultBackgrounds = new Map();
    function isSetColorFilterOnlyWidget(nativeView) {
        return (nativeView instanceof android.widget.Button ||
            (nativeView instanceof android.support.v7.widget.Toolbar
                && getSDK() >= 21));
    }
    function onBackgroundOrBorderPropertyChanged(v) {
        var nativeView = v._nativeView;
        if (!nativeView) {
            return;
        }
        ensureLazyRequires();
        var background = v.style._getValue(style.backgroundInternalProperty);
        var backgroundDrawable = nativeView.getBackground();
        var density = utils.layout.getDisplayDensity();
        var cache = v._nativeView;
        if (isSetColorFilterOnlyWidget(nativeView)
            && !types.isNullOrUndefined(backgroundDrawable)
            && types.isFunction(backgroundDrawable.setColorFilter)
            && !background.hasBorderWidth()
            && !background.hasBorderRadius()
            && !background.clipPath
            && types.isNullOrUndefined(background.image)
            && !types.isNullOrUndefined(background.color)) {
            var backgroundColor = backgroundDrawable.backgroundColor = background.color.android;
            backgroundDrawable.setColorFilter(backgroundColor, android.graphics.PorterDuff.Mode.SRC_IN);
            backgroundDrawable.backgroundColor = backgroundColor;
        }
        else if (!background.isEmpty()) {
            if (!(backgroundDrawable instanceof org.nativescript.widgets.BorderDrawable)) {
                var viewClass = types.getClass(v);
                if (!isSetColorFilterOnlyWidget(nativeView) && !_defaultBackgrounds.has(viewClass)) {
                    _defaultBackgrounds.set(viewClass, nativeView.getBackground());
                }
                backgroundDrawable = new org.nativescript.widgets.BorderDrawable(density, v.toString());
                refreshBorderDrawable(v, backgroundDrawable);
                if (getSDK() >= 16) {
                    nativeView.setBackground(backgroundDrawable);
                }
                else {
                    nativeView.setBackgroundDrawable(backgroundDrawable);
                }
            }
            else {
                refreshBorderDrawable(v, backgroundDrawable);
            }
            if ((background.hasBorderWidth() || background.hasBorderRadius() || background.clipPath) && getSDK() < 18) {
                cache.layerType = cache.getLayerType();
                cache.setLayerType(android.view.View.LAYER_TYPE_SOFTWARE, null);
            }
        }
        else {
            if (v instanceof button.Button) {
                var nativeButton = new android.widget.Button(nativeView.getContext());
                if (getSDK() >= 16) {
                    nativeView.setBackground(nativeButton.getBackground());
                }
                else {
                    nativeView.setBackgroundDrawable(nativeButton.getBackground());
                }
            }
            else {
                var viewClass = types.getClass(v);
                if (_defaultBackgrounds.has(viewClass)) {
                    if (getSDK() >= 16) {
                        nativeView.setBackground(_defaultBackgrounds.get(viewClass));
                    }
                    else {
                        nativeView.setBackgroundDrawable(_defaultBackgrounds.get(viewClass));
                    }
                }
            }
            if (cache.layerType !== undefined) {
                cache.setLayerType(cache.layerType, null);
                cache.layerType = undefined;
            }
        }
        var leftPadding = Math.round(((background.borderLeftWidth || 0) + (v.style.paddingLeft || 0)) * density);
        var topPadding = Math.round(((background.borderTopWidth || 0) + (v.style.paddingTop || 0)) * density);
        var rightPadding = Math.round(((background.borderRightWidth || 0) + (v.style.paddingRight || 0)) * density);
        var bottomPadding = Math.round(((background.borderBottomWidth || 0) + (v.style.paddingBottom || 0)) * density);
        nativeView.setPadding(leftPadding, topPadding, rightPadding, bottomPadding);
    }
    ad.onBackgroundOrBorderPropertyChanged = onBackgroundOrBorderPropertyChanged;
})(ad = exports.ad || (exports.ad = {}));
function refreshBorderDrawable(view, borderDrawable) {
    var background = view.style._getValue(style.backgroundInternalProperty);
    if (background) {
        var backgroundPositionParsedCSSValues = null;
        var backgroundSizeParsedCSSValues = null;
        if (background.position) {
            backgroundPositionParsedCSSValues = createNativeCSSValueArray(background.position);
        }
        if (background.size) {
            backgroundSizeParsedCSSValues = createNativeCSSValueArray(background.size);
        }
        borderDrawable.refresh((!types.isNullOrUndefined(background.borderTopColor) && !types.isNullOrUndefined(background.borderTopColor.android)) ? background.borderTopColor.android : android.graphics.Color.BLACK, (!types.isNullOrUndefined(background.borderRightColor) && !types.isNullOrUndefined(background.borderRightColor.android)) ? background.borderRightColor.android : android.graphics.Color.BLACK, (!types.isNullOrUndefined(background.borderBottomColor) && !types.isNullOrUndefined(background.borderBottomColor.android)) ? background.borderBottomColor.android : android.graphics.Color.BLACK, (!types.isNullOrUndefined(background.borderLeftColor) && !types.isNullOrUndefined(background.borderLeftColor.android)) ? background.borderLeftColor.android : android.graphics.Color.BLACK, background.borderTopWidth, background.borderRightWidth, background.borderBottomWidth, background.borderLeftWidth, background.borderTopLeftRadius, background.borderTopRightRadius, background.borderBottomRightRadius, background.borderBottomLeftRadius, background.clipPath, (background.color && background.color.android) ? background.color.android : 0, (background.image && background.image.android) ? background.image.android : null, background.repeat, background.position, backgroundPositionParsedCSSValues, background.size, backgroundSizeParsedCSSValues);
    }
}
function createNativeCSSValueArray(css) {
    if (!css) {
        return null;
    }
    var cssValues = cssValue(css);
    var nativeArray = Array.create(org.nativescript.widgets.CSSValue, cssValues.length);
    for (var i = 0, length = cssValues.length; i < length; i++) {
        nativeArray[i] = new org.nativescript.widgets.CSSValue(cssValues[i].type, cssValues[i].string, cssValues[i].unit, cssValues[i].value);
    }
    return nativeArray;
}
//# sourceMappingURL=background.js.map
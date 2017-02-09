var imageCommon = require("./image-common");
var style = require("ui/styling/style");
var enums = require("ui/enums");
var types = require("utils/types");
var imageSource = require("image-source");
var utils = require("utils/utils");
var fs = require("file-system");
global.moduleMerge(imageCommon, exports);
var FILE_PREFIX = "file:///";
var ASYNC = "async";
var imageFetcher;
var imageCache;
(function (CacheMode) {
    CacheMode[CacheMode["none"] = 0] = "none";
    CacheMode[CacheMode["memory"] = 1] = "memory";
    CacheMode[CacheMode["diskAndMemory"] = 2] = "diskAndMemory";
})(exports.CacheMode || (exports.CacheMode = {}));
var CacheMode = exports.CacheMode;
function onStretchPropertyChanged(data) {
    var image = data.object;
    if (!image.android) {
        return;
    }
    switch (data.newValue) {
        case enums.Stretch.aspectFit:
            image.android.setScaleType(android.widget.ImageView.ScaleType.FIT_CENTER);
            break;
        case enums.Stretch.aspectFill:
            image.android.setScaleType(android.widget.ImageView.ScaleType.CENTER_CROP);
            break;
        case enums.Stretch.fill:
            image.android.setScaleType(android.widget.ImageView.ScaleType.FIT_XY);
            break;
        case enums.Stretch.none:
        default:
            image.android.setScaleType(android.widget.ImageView.ScaleType.MATRIX);
            break;
    }
}
function onImageSourcePropertyChanged(data) {
    var image = data.object;
    if (!image.android) {
        return;
    }
    image._setNativeImage(data.newValue);
}
function initImageCache(context, mode, memoryCacheSize, diskCacheSize) {
    if (mode === void 0) { mode = CacheMode.diskAndMemory; }
    if (memoryCacheSize === void 0) { memoryCacheSize = 0.25; }
    if (diskCacheSize === void 0) { diskCacheSize = 10 * 1024 * 1024; }
    if (exports.currentCacheMode === mode) {
        return;
    }
    exports.currentCacheMode = mode;
    if (!imageFetcher) {
        imageFetcher = org.nativescript.widgets.image.Fetcher.getInstance(context);
    }
    if (mode === CacheMode.none) {
        if (imageCache != null && imageFetcher != null) {
            imageFetcher.clearCache();
        }
    }
    var params = new org.nativescript.widgets.image.Cache.CacheParams();
    params.memoryCacheEnabled = mode !== CacheMode.none;
    params.setMemCacheSizePercent(memoryCacheSize);
    params.diskCacheEnabled = mode === CacheMode.diskAndMemory;
    params.diskCacheSize = diskCacheSize;
    imageCache = org.nativescript.widgets.image.Cache.getInstance(params);
    imageFetcher.addImageCache(imageCache);
    imageFetcher.initCache();
}
exports.initImageCache = initImageCache;
imageCommon.Image.imageSourceProperty.metadata.onSetNativeValue = onImageSourcePropertyChanged;
imageCommon.Image.stretchProperty.metadata.onSetNativeValue = onStretchPropertyChanged;
var Image = (function (_super) {
    __extends(Image, _super);
    function Image() {
        _super.apply(this, arguments);
        this.decodeWidth = 0;
        this.decodeHeight = 0;
        this.useCache = true;
    }
    Object.defineProperty(Image.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Image.prototype._createUI = function () {
        if (!imageFetcher) {
            initImageCache(this._context);
        }
        this._android = new org.nativescript.widgets.ImageView(this._context);
        this._createImageSourceFromSrc();
    };
    Image.prototype._setNativeImage = function (nativeImage) {
        if (!nativeImage) {
            return;
        }
        var rotation = nativeImage.rotationAngle ? nativeImage.rotationAngle : 0;
        this.android.setRotationAngle(rotation);
        this.android.setImageBitmap(nativeImage.android);
    };
    Image.prototype._createImageSourceFromSrc = function () {
        var imageView = this._android;
        if (!imageView || !this.src) {
            return;
        }
        var value = this.src;
        var async = this.loadMode === ASYNC;
        var owner = new WeakRef(this);
        var listener = new org.nativescript.widgets.image.Worker.OnImageLoadedListener({
            onImageLoaded: function (success) {
                var that = owner.get();
                if (that) {
                    that._setValue(Image.isLoadingProperty, false);
                }
            }
        });
        this._resetValue(Image.imageSourceProperty);
        if (types.isString(value)) {
            value = value.trim();
            this._setValue(Image.isLoadingProperty, true);
            if (utils.isDataURI(value)) {
                _super.prototype._createImageSourceFromSrc.call(this);
            }
            else if (imageSource.isFileOrResourcePath(value)) {
                if (value.indexOf(utils.RESOURCE_PREFIX) === 0) {
                    imageView.setUri(value, this.decodeWidth, this.decodeHeight, this.useCache, async, listener);
                }
                else {
                    var fileName = value;
                    if (fileName.indexOf("~/") === 0) {
                        fileName = fs.path.join(fs.knownFolders.currentApp().path, fileName.replace("~/", ""));
                    }
                    imageView.setUri(FILE_PREFIX + fileName, this.decodeWidth, this.decodeHeight, this.useCache, async, listener);
                }
            }
            else {
                imageView.setUri(value, this.decodeWidth, this.decodeHeight, this.useCache, true, listener);
            }
        }
        else {
            _super.prototype._createImageSourceFromSrc.call(this);
        }
    };
    return Image;
}(imageCommon.Image));
exports.Image = Image;
var ImageStyler = (function () {
    function ImageStyler() {
    }
    ImageStyler.setTintColorProperty = function (view, newValue) {
        var imageView = view._nativeView;
        imageView.setColorFilter(newValue);
    };
    ImageStyler.resetTintColorProperty = function (view, nativeValue) {
        var imageView = view._nativeView;
        imageView.clearColorFilter();
    };
    ImageStyler.registerHandlers = function () {
        style.registerHandler(style.tintColorProperty, new style.StylePropertyChangedHandler(ImageStyler.setTintColorProperty, ImageStyler.resetTintColorProperty), "Image");
    };
    return ImageStyler;
}());
exports.ImageStyler = ImageStyler;
ImageStyler.registerHandlers();
//# sourceMappingURL=image.js.map
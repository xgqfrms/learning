var types = require("utils/types");
var http = require("http");
var requestIdCounter = 0;
var pendingRequests = {};
var utils;
function ensureUtils() {
    if (!utils) {
        utils = require("utils/utils");
    }
}
var imageSource;
function ensureImageSource() {
    if (!imageSource) {
        imageSource = require("image-source");
    }
}
var platform;
function ensurePlatform() {
    if (!platform) {
        platform = require("platform");
    }
}
var completeCallback;
function ensureCompleteCallback() {
    if (completeCallback) {
        return;
    }
    completeCallback = new org.nativescript.widgets.Async.CompleteCallback({
        onComplete: function (result, context) {
            onRequestComplete(context, result);
        }
    });
}
function onRequestComplete(requestId, result) {
    var callbacks = pendingRequests[requestId];
    delete pendingRequests[requestId];
    if (result.error) {
        callbacks.rejectCallback(new Error(result.error.toString()));
        return;
    }
    var headers = {};
    if (result.headers) {
        var jHeaders = result.headers;
        var length = jHeaders.size();
        var i;
        var pair;
        for (i = 0; i < length; i++) {
            pair = jHeaders.get(i);
            http.addHeader(headers, pair.key, pair.value);
        }
    }
    callbacks.resolveCallback({
        content: {
            raw: result.raw,
            toString: function (encoding) {
                var str;
                if (encoding) {
                    str = decodeResponse(result.raw, encoding);
                }
                else {
                    str = result.responseAsString;
                }
                if (types.isString(str)) {
                    return str;
                }
                else {
                    throw new Error("Response content may not be converted to string");
                }
            },
            toJSON: function (encoding) {
                ensureUtils();
                var str;
                if (encoding) {
                    str = decodeResponse(result.raw, encoding);
                }
                else {
                    str = result.responseAsString;
                }
                return utils.parseJSON(str);
            },
            toImage: function () {
                ensureImageSource();
                return new Promise(function (resolveImage, rejectImage) {
                    if (result.responseAsImage != null) {
                        resolveImage(imageSource.fromNativeSource(result.responseAsImage));
                    }
                    else {
                        rejectImage(new Error("Response content may not be converted to an Image"));
                    }
                });
            },
            toFile: function (destinationFilePath) {
                var fs = require("file-system");
                var fileName = callbacks.url;
                if (!destinationFilePath) {
                    destinationFilePath = fs.path.join(fs.knownFolders.documents().path, fileName.substring(fileName.lastIndexOf('/') + 1));
                }
                var stream;
                try {
                    var javaFile = new java.io.File(destinationFilePath);
                    stream = new java.io.FileOutputStream(javaFile);
                    stream.write(result.raw.toByteArray());
                    return fs.File.fromPath(destinationFilePath);
                }
                catch (exception) {
                    throw new Error("Cannot save file with path: " + destinationFilePath + ".");
                }
                finally {
                    if (stream) {
                        stream.close();
                    }
                }
            }
        },
        statusCode: result.statusCode,
        headers: headers
    });
}
function buildJavaOptions(options) {
    if (!types.isString(options.url)) {
        throw new Error("Http request must provide a valid url.");
    }
    var javaOptions = new org.nativescript.widgets.Async.Http.RequestOptions();
    javaOptions.url = options.url;
    if (types.isString(options.method)) {
        javaOptions.method = options.method;
    }
    if (types.isString(options.content) || options.content instanceof FormData) {
        javaOptions.content = options.content.toString();
    }
    if (types.isNumber(options.timeout)) {
        javaOptions.timeout = options.timeout;
    }
    if (types.isBoolean(options.dontFollowRedirects)) {
        javaOptions.dontFollowRedirects = options.dontFollowRedirects;
    }
    if (options.headers) {
        var arrayList = new java.util.ArrayList();
        var pair = org.nativescript.widgets.Async.Http.KeyValuePair;
        for (var key in options.headers) {
            arrayList.add(new pair(key, options.headers[key] + ""));
        }
        javaOptions.headers = arrayList;
    }
    ensurePlatform();
    var screen = platform.screen.mainScreen;
    javaOptions.screenWidth = screen.widthPixels;
    javaOptions.screenHeight = screen.heightPixels;
    return javaOptions;
}
function request(options) {
    if (!types.isDefined(options)) {
        return;
    }
    return new Promise(function (resolve, reject) {
        try {
            var javaOptions = buildJavaOptions(options);
            var callbacks = {
                url: options.url,
                resolveCallback: resolve,
                rejectCallback: reject
            };
            pendingRequests[requestIdCounter] = callbacks;
            ensureCompleteCallback();
            org.nativescript.widgets.Async.Http.MakeRequest(javaOptions, completeCallback, new java.lang.Integer(requestIdCounter));
            requestIdCounter++;
        }
        catch (ex) {
            reject(ex);
        }
    });
}
exports.request = request;
function decodeResponse(raw, encoding) {
    var charsetName = "UTF-8";
    if (encoding === 1) {
        charsetName = 'GBK';
    }
    return raw.toString(charsetName);
}
//# sourceMappingURL=http-request.js.map
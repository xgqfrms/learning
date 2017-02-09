var platform = require("platform");
var REQUEST_IMAGE_CAPTURE = 3453;
exports.takePicture = function (options) {
    return new Promise(function (resolve, reject) {
        try {
            var types = require("utils/types");
            var utils = require("utils/utils");
            var saveToGallery = void 0;
            var reqWidth_1;
            var reqHeight_1;
            var shouldKeepAspectRatio_1;
            var density = utils.layout.getDisplayDensity();
            if (options) {
                saveToGallery = options.saveToGallery ? true : false;
                reqWidth_1 = options.width ? options.width * density : 0;
                reqHeight_1 = options.height ? options.height * density : reqWidth_1;
                shouldKeepAspectRatio_1 = types.isNullOrUndefined(options.keepAspectRatio) ? true : options.keepAspectRatio;
            }
            var takePictureIntent = new android.content.Intent(android.provider.MediaStore.ACTION_IMAGE_CAPTURE);
            var dateStamp = createDateTimeStamp();
            var picturePath_1;
            var nativeFile = void 0;
            var tempPictureUri = void 0;
            if (saveToGallery) {
                picturePath_1 = android.os.Environment.getExternalStoragePublicDirectory(android.os.Environment.DIRECTORY_PICTURES).getAbsolutePath() + "/" + "cameraPicture_" + dateStamp + ".jpg";
                nativeFile = new java.io.File(picturePath_1);
                tempPictureUri = android.net.Uri.fromFile(nativeFile);
                takePictureIntent.putExtra(android.provider.MediaStore.EXTRA_OUTPUT, tempPictureUri);
            }
            else {
                picturePath_1 = utils.ad.getApplicationContext().getExternalFilesDir(null).getAbsolutePath() + "/" + "cameraPicture_" + dateStamp + ".jpg";
                nativeFile = new java.io.File(picturePath_1);
                tempPictureUri = android.net.Uri.fromFile(nativeFile);
                takePictureIntent.putExtra(android.provider.MediaStore.EXTRA_OUTPUT, tempPictureUri);
            }
            if (takePictureIntent.resolveActivity(utils.ad.getApplicationContext().getPackageManager()) != null) {
                var appModule_1 = require("application");
                var previousResult_1 = appModule_1.android.onActivityResult;
                appModule_1.android.onActivityResult = function (requestCode, resultCode, data) {
                    appModule_1.android.onActivityResult = previousResult_1;
                    if (requestCode === REQUEST_IMAGE_CAPTURE && resultCode === android.app.Activity.RESULT_OK) {
                        var imageSource = require("image-source");
                        var options_1 = new android.graphics.BitmapFactory.Options();
                        options_1.inJustDecodeBounds = true;
                        var bitmap = android.graphics.BitmapFactory.decodeFile(picturePath_1, options_1);
                        var sampleSize = calculateInSampleSize(options_1.outWidth, options_1.outHeight, reqWidth_1, reqHeight_1);
                        var finalBitmapOptions = new android.graphics.BitmapFactory.Options();
                        finalBitmapOptions.inSampleSize = sampleSize;
                        bitmap = android.graphics.BitmapFactory.decodeFile(picturePath_1, finalBitmapOptions);
                        var scaledSizeImage = null;
                        if (reqHeight_1 > 0 && reqWidth_1 > 0) {
                            if (shouldKeepAspectRatio_1) {
                                var common = require("./camera-common");
                                var aspectSafeSize = common.getAspectSafeDimensions(bitmap.getWidth(), bitmap.getHeight(), reqWidth_1, reqHeight_1);
                                scaledSizeImage = android.graphics.Bitmap.createScaledBitmap(bitmap, aspectSafeSize.width, aspectSafeSize.height, true);
                            }
                            else {
                                scaledSizeImage = android.graphics.Bitmap.createScaledBitmap(bitmap, reqWidth_1, reqHeight_1, true);
                            }
                        }
                        else {
                            scaledSizeImage = bitmap;
                        }
                        resolve(imageSource.fromNativeSource(scaledSizeImage));
                    }
                };
                appModule_1.android.foregroundActivity.startActivityForResult(takePictureIntent, REQUEST_IMAGE_CAPTURE);
            }
        }
        catch (e) {
            if (reject) {
                reject(e);
            }
        }
    });
};
exports.isAvailable = function () {
    var utils = require("utils/utils");
    return utils.ad.getApplicationContext().getPackageManager().hasSystemFeature(android.content.pm.PackageManager.FEATURE_CAMERA);
};
var calculateInSampleSize = function (imageWidth, imageHeight, reqWidth, reqHeight) {
    var sampleSize = 1;
    var displayWidth = platform.screen.mainScreen.widthDIPs;
    var displayHeigth = platform.screen.mainScreen.heightDIPs;
    reqWidth = (reqWidth > 0 && reqWidth < displayWidth) ? reqWidth : displayWidth;
    reqHeight = (reqHeight > 0 && reqHeight < displayHeigth) ? reqHeight : displayHeigth;
    if (imageWidth > reqWidth && imageHeight > reqHeight) {
        var halfWidth = imageWidth / 2;
        var halfHeight = imageHeight / 2;
        while ((halfWidth / sampleSize) > reqWidth && (halfHeight / sampleSize) > reqHeight) {
            sampleSize *= 2;
        }
    }
    return sampleSize;
};
var createDateTimeStamp = function () {
    var result = "";
    var date = new Date();
    result = (date.getDate() < 10 ? "0" + date.getDate().toString() : date.getDate().toString()) +
        ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString()) +
        date.getFullYear().toString() +
        date.getHours().toString() +
        date.getMinutes().toString() +
        date.getSeconds().toString();
    return result;
};
//# sourceMappingURL=camera.js.map
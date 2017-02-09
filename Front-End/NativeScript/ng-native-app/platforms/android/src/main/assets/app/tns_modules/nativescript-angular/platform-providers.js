var frame_1 = require("ui/frame");
var page_1 = require("ui/page");
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var platform = require("platform");
exports.APP_ROOT_VIEW = new core_1.OpaqueToken("App Root View");
exports.DEVICE = new core_1.OpaqueToken("platfrom device");
exports.PAGE_FACTORY = new core_1.OpaqueToken("page factory");
// Work around a TS bug requiring an import of platform.Device without using it
if (global.___TS_UNUSED) {
    (function () {
        return platform;
    })();
}
// Use an exported function to make the AoT compiler happy.
function getDefaultPage() {
    var frame = frame_1.topmost();
    if (frame) {
        return frame.currentPage;
    }
    else {
        return null;
    }
}
exports.getDefaultPage = getDefaultPage;
exports.defaultPageProvider = { provide: page_1.Page, useFactory: getDefaultPage };
// Use an exported function to make the AoT compiler happy.
function getDefaultFrame() {
    return frame_1.topmost();
}
exports.getDefaultFrame = getDefaultFrame;
exports.defaultFrameProvider = { provide: frame_1.Frame, useFactory: getDefaultFrame };
// Use an exported function to make the AoT compiler happy.
function getDefaultDevice() {
    return platform_1.device;
}
exports.getDefaultDevice = getDefaultDevice;
exports.defaultDeviceProvider = { provide: exports.DEVICE, useFactory: getDefaultDevice };
exports.defaultPageFactory = function (_opts) {
    return new page_1.Page();
};
exports.defaultPageFactoryProvider = { provide: exports.PAGE_FACTORY, useValue: exports.defaultPageFactory };
//# sourceMappingURL=platform-providers.js.map
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var platform_providers_1 = require("../platform-providers");
var AndroidFilterComponent = (function () {
    function AndroidFilterComponent(device) {
        this.show = (device.os === platform_1.platformNames.android);
    }
    return AndroidFilterComponent;
}());
AndroidFilterComponent = __decorate([
    core_1.Component({
        selector: "android",
        template: "<ng-content *ngIf=\"show\"></ng-content>",
    }),
    __param(0, core_1.Inject(platform_providers_1.DEVICE)),
    __metadata("design:paramtypes", [Object])
], AndroidFilterComponent);
exports.AndroidFilterComponent = AndroidFilterComponent;
var IosFilterComponent = (function () {
    function IosFilterComponent(device) {
        this.show = (device.os === platform_1.platformNames.ios);
    }
    return IosFilterComponent;
}());
IosFilterComponent = __decorate([
    core_1.Component({
        selector: "ios",
        template: "<ng-content *ngIf=\"show\"></ng-content>",
    }),
    __param(0, core_1.Inject(platform_providers_1.DEVICE)),
    __metadata("design:paramtypes", [Object])
], IosFilterComponent);
exports.IosFilterComponent = IosFilterComponent;
//# sourceMappingURL=platform-filters.js.map
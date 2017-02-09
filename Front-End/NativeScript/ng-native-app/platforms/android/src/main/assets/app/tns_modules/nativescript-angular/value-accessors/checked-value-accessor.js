var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var lang_facade_1 = require("../lang-facade");
var base_value_accessor_1 = require("./base-value-accessor");
var CHECKED_VALUE_ACCESSOR = { provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return CheckedValueAccessor; }), multi: true };
/**
 * The accessor for setting a checked property and listening to changes that is used by the
 * {@link NgModel} directives.
 *
 *  ### Example
 *  ```
 *  <Switch [(ngModel)]="model.test">
 *  ```
 */
var CheckedValueAccessor = (function (_super) {
    __extends(CheckedValueAccessor, _super);
    function CheckedValueAccessor(elementRef) {
        var _this = _super.call(this, elementRef.nativeElement) || this;
        _this.onTouched = function () { };
        return _this;
    }
    CheckedValueAccessor.prototype.checkedChangeListener = function (event) {
        this.onChange(event.value);
    };
    CheckedValueAccessor.prototype.writeValue = function (value) {
        var normalizedValue = false;
        if (!lang_facade_1.isBlank(value)) {
            if (typeof value === "string") {
                normalizedValue = value.toLowerCase() === "true" ? true : false;
            }
            else {
                normalizedValue = !!value;
            }
        }
        this.view.checked = normalizedValue;
    };
    CheckedValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    return CheckedValueAccessor;
}(base_value_accessor_1.BaseValueAccessor));
__decorate([
    core_1.HostListener("checkedChange", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CheckedValueAccessor.prototype, "checkedChangeListener", null);
CheckedValueAccessor = __decorate([
    core_1.Directive({
        // tslint:disable-next-line:max-line-length directive-selector
        selector: "Switch[ngModel], Switch[formControlName], switch[ngModel], switch[formControlName], switch[ngModel], switch[formControlName]",
        providers: [CHECKED_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], CheckedValueAccessor);
exports.CheckedValueAccessor = CheckedValueAccessor;
//# sourceMappingURL=checked-value-accessor.js.map
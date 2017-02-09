var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var lang_facade_1 = require("../lang-facade");
var base_value_accessor_1 = require("./base-value-accessor");
var TEXT_VALUE_ACCESSOR = { provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return TextValueAccessor; }), multi: true };
/**
 * The accessor for writing a text and listening to changes that is used by the
 * {@link NgModel} directives.
 *
 *  ### Example
 *  ```
 *  <TextField [(ngModel)]="model.test">
 *  ```
 */
var TextValueAccessor = (function (_super) {
    __extends(TextValueAccessor, _super);
    function TextValueAccessor(elementRef) {
        var _this = _super.call(this, elementRef.nativeElement) || this;
        _this.onTouched = function () { };
        return _this;
    }
    TextValueAccessor.prototype.textChangeListener = function (event) {
        this.onChange(event.value);
    };
    TextValueAccessor.prototype.writeValue = function (value) {
        var normalizedValue = lang_facade_1.isBlank(value) ? "" : value.toString();
        this.view.text = normalizedValue;
    };
    TextValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    return TextValueAccessor;
}(base_value_accessor_1.BaseValueAccessor));
__decorate([
    core_1.HostListener("textChange", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TextValueAccessor.prototype, "textChangeListener", null);
TextValueAccessor = __decorate([
    core_1.Directive({
        // tslint:disable-next-line:max-line-length directive-selector
        selector: "TextField[ngModel], TextField[formControlName], textField[ngModel], textField[formControlName], text-field[ngModel], text-field[formControlName], TextView[ngModel], TextView[formControlName], textView[ngModel], textView[formControlName], text-view[ngModel], text-view[formControlName], SearchBar[ngModel], SearchBar[formControlName], searchBar[ngModel], searchBar[formControlName], search-bar[ngModel], search-bar[formControlName]",
        providers: [TEXT_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], TextValueAccessor);
exports.TextValueAccessor = TextValueAccessor;
//# sourceMappingURL=text-value-accessor.js.map
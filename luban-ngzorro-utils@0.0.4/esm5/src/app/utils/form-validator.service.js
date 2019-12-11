import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormValidatorModel } from '../models/form-validator.model';
import { RegexpUtils } from 'great-jsutils';
import * as i0 from "@angular/core";
var FormValidatorService = /** @class */ (function () {
    function FormValidatorService() {
    }
    /**
     * 验证是否全为中文
     * @param model:
     */
    FormValidatorService.prototype.chinese = function (model) {
        var _this = this;
        model = FormValidatorModel.init(model);
        var regExp = /^[\u4e00-\u9fa5]+$/;
        return function (control) {
            if (!control.value) {
                return null;
            }
            var result = regExp.test(control.value);
            return _this.buildReturnResult(result, model, control);
        };
    };
    /**
     * 字母数字
     * @param model:
     */
    FormValidatorService.prototype.alphanumeric = function (model) {
        var _this = this;
        model = FormValidatorModel.init(model);
        var regExp = /^[A-Za-z0-9]+$/;
        return function (control) {
            var result = regExp.test(control.value);
            return _this.buildReturnResult(result, model, control);
        };
    };
    /**
     * 根据输入正则校验
     * @param model:
     */
    FormValidatorService.prototype.regex = function (model) {
        var _this = this;
        model = FormValidatorModel.init(model);
        var regExp = model.value;
        return function (control) {
            var result = regExp.test(control.value);
            return _this.buildReturnResult(result, model, control);
        };
    };
    /**
     * 身份证
     * @param model:
     */
    FormValidatorService.prototype.identityCard = function (model) {
        var _this = this;
        model = FormValidatorModel.init(model);
        var regExp = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
        return function (control) {
            var result = regExp.test(control.value);
            return _this.buildReturnResult(result, model, control);
        };
    };
    /**
     * 邮箱
     * @param model:
     */
    FormValidatorService.prototype.email = function (model) {
        var _this = this;
        model = FormValidatorModel.init(model);
        var regExp = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        return function (control) {
            var result = regExp.test(control.value);
            return _this.buildReturnResult(result, model, control);
        };
    };
    /**
     * 手机号
     * @param model:
     */
    FormValidatorService.prototype.mobile = function (model) {
        var _this = this;
        model = FormValidatorModel.init(model);
        var regExp = /^[1][3,4,5,7,8][0-9]{9}$/;
        return function (control) {
            var result = regExp.test(control.value);
            return _this.buildReturnResult(result, model, control);
        };
    };
    /**
     * url
     * @param model:
     */
    FormValidatorService.prototype.url = function (model) {
        var _this = this;
        model = FormValidatorModel.init(model);
        var regExp = /^((ht|f)tps?):\/\/([\w\-]+(\.[\w\-]+)*\/)*[\w\-]+(\.[\w\-]+)*\/?(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?/;
        return function (control) {
            if (control.value && model.trimLR) {
                control.setValue(control.value.trim());
            }
            var result = regExp.test(control.value);
            return _this.buildReturnResult(result, model, control);
        };
    };
    /**
     * 整数
     * @param model:
     */
    FormValidatorService.prototype.integer = function (model) {
        var _this = this;
        model = FormValidatorModel.init(model);
        var regExp = /^\d+$/;
        return function (control) {
            var result = regExp.test(control.value);
            return _this.buildReturnResult(result, model, control);
        };
    };
    /**
     * 数字验证
     * @param model:
     */
    FormValidatorService.prototype.decimal = function (model) {
        var _this = this;
        model = FormValidatorModel.init(model);
        return function (control) {
            var options = {};
            if (model.scale) {
                options = { scale: model.scale };
            }
            else if (model.maxScale) {
                options = { scale: model.maxScale };
            }
            if (model.min) {
                options = tslib_1.__assign({}, options, { min: model.min });
            }
            if (model.max) {
                options = tslib_1.__assign({}, options, { max: model.max });
            }
            var result = RegexpUtils.isNumber(control.value, options);
            return _this.buildReturnResult(result, model, control);
        };
    };
    FormValidatorService.prototype.byteLength = function (model) {
        var _this = this;
        model = FormValidatorModel.init(model);
        return function (control) {
            if (!control.value) {
                return null;
            }
            var options = {};
            if (model.minLength) {
                options = { minLength: model.minLength };
            }
            else if (model.maxLength) {
                options = { maxLength: model.maxLength };
            }
            if (control.value && model.trimLR) {
                control.setValue(control.value.trim());
            }
            var result = RegexpUtils.byteLength(control.value, options);
            return _this.buildReturnResult(result, model, control);
        };
    };
    FormValidatorService.prototype.buildReturnResult = function (regExpResult, model, control) {
        if (model.maxLength && regExpResult) {
            regExpResult = control.value.length <= model.maxLength;
        }
        if (model.minLength && regExpResult) {
            regExpResult = control.value.length >= model.minLength;
        }
        var defaultModel = model.defaultValue();
        if (regExpResult) {
            return null;
        }
        else {
            var result = {};
            var key = !!model.key ? model.key : defaultModel.key;
            var errorMsgKey = !!model.errorMsgKey ? model.errorMsgKey : defaultModel.errorMsgKey;
            var errorMsg = !!model.errorMsg ? model.errorMsg : defaultModel.errorMsg;
            result[key] = { value: control.value };
            if (model.errorMsgKey) {
                result[key][errorMsgKey] = errorMsg;
            }
            else {
                result[key][errorMsgKey] = errorMsg;
            }
            return result;
        }
    };
    FormValidatorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FormValidatorService_Factory() { return new FormValidatorService(); }, token: FormValidatorService, providedIn: "root" });
    FormValidatorService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], FormValidatorService);
    return FormValidatorService;
}());
export { FormValidatorService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS12YWxpZGF0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2x1YmFuLW5nem9ycm8tdXRpbHMvIiwic291cmNlcyI6WyJzcmMvYXBwL3V0aWxzL2Zvcm0tdmFsaWRhdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFLMUM7SUFFRTtJQUNBLENBQUM7SUFFRDs7O09BR0c7SUFDSCxzQ0FBTyxHQUFQLFVBQVEsS0FBZ0M7UUFBeEMsaUJBVUM7UUFUQyxLQUFLLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLElBQU0sTUFBTSxHQUFXLG9CQUFvQixDQUFDO1FBQzVDLE9BQU8sVUFBQyxPQUF3QjtZQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtnQkFDbEIsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUNELElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFDLE9BQU8sS0FBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRztJQUNILDJDQUFZLEdBQVosVUFBYSxLQUFnQztRQUE3QyxpQkFPQztRQU5DLEtBQUssR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsSUFBTSxNQUFNLEdBQVcsZ0JBQWdCLENBQUM7UUFDeEMsT0FBTyxVQUFDLE9BQXdCO1lBQzlCLElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxD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UUFBUSxDQUFDO2FBQ3JDO1lBQ0QsT0FBTyxNQUFNLENBQUM7U0FDZjtJQUNILENBQUM7O0lBdExVLG9CQUFvQjtRQUhoQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDOztPQUNXLG9CQUFvQixDQXVMaEM7K0JBL0xEO0NBK0xDLEFBdkxELElBdUxDO1NBdkxZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Fic3RyYWN0Q29udHJvbCwgVmFsaWRhdG9yRm59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7Rm9ybVZhbGlkYXRvck1vZGVsfSBmcm9tICcuLi9tb2RlbHMvZm9ybS12YWxpZGF0b3IubW9kZWwnO1xuaW1wb3J0IHtSZWdleHBVdGlsc30gZnJvbSAnZ3JlYXQtanN1dGlscyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1WYWxpZGF0b3JTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiDpqozor4HmmK/lkKblhajkuLrkuK3mlodcbiAgICogQHBhcmFtIG1vZGVsOlxuICAgKi9cbiAgY2hpbmVzZShtb2RlbD86IEZvcm1WYWxpZGF0b3JNb2RlbCB8IGFueSk6IFZhbGlkYXRvckZuIHtcbiAgICBtb2RlbCA9IEZvcm1WYWxpZGF0b3JNb2RlbC5pbml0KG1vZGVsKTtcbiAgICBjb25zdCByZWdFeHA6IFJlZ0V4cCA9IC9eW1xcdTRlMDAtXFx1OWZhNV0rJC87XG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHwgbnVsbCA9PiB7XG4gICAgICBpZiAoIWNvbnRyb2wudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBjb25zdCByZXN1bHQgPSByZWdFeHAudGVzdChjb250cm9sLnZhbHVlKTtcbiAgICAgIHJldHVybiB0aGlzLmJ1aWxkUmV0dXJuUmVzdWx0KHJlc3VsdCwgbW9kZWwsIGNvbnRyb2wpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICog5a2X5q+N5pWw5a2XXG4gICAqIEBwYXJhbSBtb2RlbDpcbiAgICovXG4gIGFscGhhbnVtZXJpYyhtb2RlbD86IEZvcm1WYWxpZGF0b3JNb2RlbCB8IGFueSk6IFZhbGlkYXRvckZuIHtcbiAgICBtb2RlbCA9IEZvcm1WYWxpZGF0b3JNb2RlbC5pbml0KG1vZGVsKTtcbiAgICBjb25zdCByZWdFeHA6IFJlZ0V4cCA9IC9eW0EtWmEtejAtOV0rJC87XG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHwgbnVsbCA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSByZWdFeHAudGVzdChjb250cm9sLnZhbHVlKTtcbiAgICAgIHJldHVybiB0aGlzLmJ1aWxkUmV0dXJuUmVzdWx0KHJlc3VsdCwgbW9kZWwsIGNvbnRyb2wpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICog5qC55o2u6L6T5YWl5q2j5YiZ5qCh6aqMXG4gICAqIEBwYXJhbSBtb2RlbDpcbiAgICovXG4gIHJlZ2V4KG1vZGVsOiBGb3JtVmFsaWRhdG9yTW9kZWwpOiBWYWxpZGF0b3JGbiB7XG4gICAgbW9kZWwgPSBGb3JtVmFsaWRhdG9yTW9kZWwuaW5pdChtb2RlbCk7XG4gICAgY29uc3QgcmVnRXhwOiBSZWdFeHAgPSBtb2RlbC52YWx1ZTtcbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gfCBudWxsID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHJlZ0V4cC50ZXN0KGNvbnRyb2wudmFsdWUpO1xuICAgICAgcmV0dXJuIHRoaXMuYnVpbGRSZXR1cm5SZXN1bHQocmVzdWx0LCBtb2RlbCwgY29udHJvbCk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiDouqvku73or4FcbiAgICogQHBhcmFtIG1vZGVsOlxuICAgKi9cbiAgaWRlbnRpdHlDYXJkKG1vZGVsPzogRm9ybVZhbGlkYXRvck1vZGVsIHwgYW55KTogVmFsaWRhdG9yRm4ge1xuICAgIG1vZGVsID0gRm9ybVZhbGlkYXRvck1vZGVsLmluaXQobW9kZWwpO1xuICAgIGNvbnN0IHJlZ0V4cDogUmVnRXhwID0gL15bMS05XVxcZHs3fSgoMFxcZCl8KDFbMC0yXSkpKChbMHwxfDJdXFxkKXwzWzAtMV0pXFxkezN9JHxeWzEtOV1cXGR7NX1bMS05XVxcZHszfSgoMFxcZCl8KDFbMC0yXSkpKChbMHwxfDJdXFxkKXwzWzAtMV0pXFxkezN9KFswLTldfFgpJC87XG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHwgbnVsbCA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSByZWdFeHAudGVzdChjb250cm9sLnZhbHVlKTtcbiAgICAgIHJldHVybiB0aGlzLmJ1aWxkUmV0dXJuUmVzdWx0KHJlc3VsdCwgbW9kZWwsIGNvbnRyb2wpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICog6YKu566xXG4gICAqIEBwYXJhbSBtb2RlbDpcbiAgICovXG4gIGVtYWlsKG1vZGVsPzogRm9ybVZhbGlkYXRvck1vZGVsIHwgYW55KTogVmFsaWRhdG9yRm4ge1xuICAgIG1vZGVsID0gRm9ybVZhbGlkYXRvck1vZGVsLmluaXQobW9kZWwpO1xuICAgIGNvbnN0IHJlZ0V4cDogUmVnRXhwID0gL15bQS1aYS16MC05XFx1NGUwMC1cXHU5ZmE1XStAW2EtekEtWjAtOV8tXSsoXFwuW2EtekEtWjAtOV8tXSspKyQvO1xuICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB8IG51bGwgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gcmVnRXhwLnRlc3QoY29udHJvbC52YWx1ZSk7XG4gICAgICByZXR1cm4gdGhpcy5idWlsZFJldHVyblJlc3VsdChyZXN1bHQsIG1vZGVsLCBjb250cm9sKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIOaJi+acuuWPt1xuICAgKiBAcGFyYW0gbW9kZWw6XG4gICAqL1xuICBtb2JpbGUobW9kZWw/OiBGb3JtVmFsaWRhdG9yTW9kZWwgfCBhbnkpOiBWYWxpZGF0b3JGbiB7XG4gICAgbW9kZWwgPSBGb3JtVmFsaWRhdG9yTW9kZWwuaW5pdChtb2RlbCk7XG4gICAgY29uc3QgcmVnRXhwOiBSZWdFeHAgPSAvXlsxXVszLDQsNSw3LDhdWzAtOV17OX0kLztcbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gfCBudWxsID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHJlZ0V4cC50ZXN0KGNvbnRyb2wudmFsdWUpO1xuICAgICAgcmV0dXJuIHRoaXMuYnVpbGRSZXR1cm5SZXN1bHQocmVzdWx0LCBtb2RlbCwgY29udHJvbCk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiB1cmxcbiAgICogQHBhcmFtIG1vZGVsOlxuICAgKi9cbiAgdXJsKG1vZGVsPzogRm9ybVZhbGlkYXRvck1vZGVsIHwgYW55KTogVmFsaWRhdG9yRm4ge1xuICAgIG1vZGVsID0gRm9ybVZhbGlkYXRvck1vZGVsLmluaXQobW9kZWwpO1xuICAgIGNvbnN0IHJlZ0V4cDogUmVnRXhwID0gL14oKGh0fGYpdHBzPyk6XFwvXFwvKFtcXHdcXC1dKyhcXC5bXFx3XFwtXSspKlxcLykqW1xcd1xcLV0rKFxcLltcXHdcXC1dKykqXFwvPyhcXD8oW1xcd1xcLVxcLixAP149JSY6XFwvflxcKyNdKikrKT8vO1xuICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB8IG51bGwgPT4ge1xuICAgICAgaWYgKGNvbnRyb2wudmFsdWUgJiYgbW9kZWwudHJpbUxSKSB7XG4gICAgICAgIGNvbnRyb2wuc2V0VmFsdWUoY29udHJvbC52YWx1ZS50cmltKCkpO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzdWx0ID0gcmVnRXhwLnRlc3QoY29udHJvbC52YWx1ZSk7XG4gICAgICByZXR1cm4gdGhpcy5idWlsZFJldHVyblJlc3VsdChyZXN1bHQsIG1vZGVsLCBjb250cm9sKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIOaVtOaVsFxuICAgKiBAcGFyYW0gbW9kZWw6XG4gICAqL1xuICBpbnRlZ2VyKG1vZGVsPzogRm9ybVZhbGlkYXRvck1vZGVsIHwgYW55KTogVmFsaWRhdG9yRm4ge1xuICAgIG1vZGVsID0gRm9ybVZhbGlkYXRvck1vZGVsLmluaXQobW9kZWwpO1xuICAgIGNvbnN0IHJlZ0V4cDogUmVnRXhwID0gL15cXGQrJC87XG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHwgbnVsbCA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSByZWdFeHAudGVzdChjb250cm9sLnZhbHVlKTtcbiAgICAgIHJldHVybiB0aGlzLmJ1aWxkUmV0dXJuUmVzdWx0KHJlc3VsdCwgbW9kZWwsIGNvbnRyb2wpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICog5pWw5a2X6aqM6K+BXG4gICAqIEBwYXJhbSBtb2RlbDpcbiAgICovXG4gIGRlY2ltYWwobW9kZWw/OiBGb3JtVmFsaWRhdG9yTW9kZWwgfCBhbnkpOiBWYWxpZGF0b3JGbiB7XG4gICAgbW9kZWwgPSBGb3JtVmFsaWRhdG9yTW9kZWwuaW5pdChtb2RlbCk7XG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHwgbnVsbCA9PiB7XG4gICAgICBsZXQgb3B0aW9ucyA9IHt9O1xuICAgICAgaWYgKG1vZGVsLnNjYWxlKSB7XG4gICAgICAgIG9wdGlvbnMgPSB7c2NhbGU6IG1vZGVsLnNjYWxlfTtcbiAgICAgIH0gZWxzZSBpZiAobW9kZWwubWF4U2NhbGUpIHtcbiAgICAgICAgb3B0aW9ucyA9IHtzY2FsZTogbW9kZWwubWF4U2NhbGV9O1xuICAgICAgfVxuICAgICAgaWYgKG1vZGVsLm1pbikge1xuICAgICAgICBvcHRpb25zID0gey4uLm9wdGlvbnMsIG1pbjogbW9kZWwubWlufTtcbiAgICAgIH1cbiAgICAgIGlmIChtb2RlbC5tYXgpIHtcbiAgICAgICAgb3B0aW9ucyA9IHsuLi5vcHRpb25zLCBtYXg6IG1vZGVsLm1heH07XG4gICAgICB9XG4gICAgICBjb25zdCByZXN1bHQgPSBSZWdleHBVdGlscy5pc051bWJlcihjb250cm9sLnZhbHVlLCBvcHRpb25zKTtcbiAgICAgIHJldHVybiB0aGlzLmJ1aWxkUmV0dXJuUmVzdWx0KHJlc3VsdCwgbW9kZWwsIGNvbnRyb2wpO1xuICAgIH07XG4gIH1cblxuICBieXRlTGVuZ3RoKG1vZGVsPzogRm9ybVZhbGlkYXRvck1vZGVsIHwgYW55KTogVmFsaWRhdG9yRm4ge1xuICAgIG1vZGVsID0gRm9ybVZhbGlkYXRvck1vZGVsLmluaXQobW9kZWwpO1xuICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB8IG51bGwgPT4ge1xuICAgICAgaWYgKCFjb250cm9sLnZhbHVlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICAgIGlmIChtb2RlbC5taW5MZW5ndGgpIHtcbiAgICAgICAgb3B0aW9ucyA9IHttaW5MZW5ndGg6IG1vZGVsLm1pbkxlbmd0aH07XG4gICAgICB9IGVsc2UgaWYgKG1vZGVsLm1heExlbmd0aCkge1xuICAgICAgICBvcHRpb25zID0ge21heExlbmd0aDogbW9kZWwubWF4TGVuZ3RofTtcbiAgICAgIH1cbiAgICAgIGlmIChjb250cm9sLnZhbHVlICYmIG1vZGVsLnRyaW1MUikge1xuICAgICAgICBjb250cm9sLnNldFZhbHVlKGNvbnRyb2wudmFsdWUudHJpbSgpKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc3VsdCA9IFJlZ2V4cFV0aWxzLmJ5dGVMZW5ndGgoY29udHJvbC52YWx1ZSwgb3B0aW9ucyk7XG4gICAgICByZXR1cm4gdGhpcy5idWlsZFJldHVyblJlc3VsdChyZXN1bHQsIG1vZGVsLCBjb250cm9sKTtcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZFJldHVyblJlc3VsdChyZWdFeHBSZXN1bHQsIG1vZGVsOiBGb3JtVmFsaWRhdG9yTW9kZWwsIGNvbnRyb2wpIHtcbiAgICBpZiAobW9kZWwubWF4TGVuZ3RoICYmIHJlZ0V4cFJlc3VsdCkge1xuICAgICAgcmVnRXhwUmVzdWx0ID0gY29udHJvbC52YWx1ZS5sZW5ndGggPD0gbW9kZWwubWF4TGVuZ3RoO1xuICAgIH1cbiAgICBpZiAobW9kZWwubWluTGVuZ3RoICYmIHJlZ0V4cFJlc3VsdCkge1xuICAgICAgcmVnRXhwUmVzdWx0ID0gY29udHJvbC52YWx1ZS5sZW5ndGggPj0gbW9kZWwubWluTGVuZ3RoO1xuICAgIH1cbiAgICBjb25zdCBkZWZhdWx0TW9kZWwgPSBtb2RlbC5kZWZhdWx0VmFsdWUoKTtcbiAgICBpZiAocmVnRXhwUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgICBjb25zdCBrZXkgPSAhIW1vZGVsLmtleSA/IG1vZGVsLmtleSA6IGRlZmF1bHRNb2RlbC5rZXk7XG4gICAgICBjb25zdCBlcnJvck1zZ0tleSA9ICEhbW9kZWwuZXJyb3JNc2dLZXkgPyBtb2RlbC5lcnJvck1zZ0tleSA6IGRlZmF1bHRNb2RlbC5lcnJvck1zZ0tleTtcbiAgICAgIGNvbnN0IGVycm9yTXNnID0gISFtb2RlbC5lcnJvck1zZyA/IG1vZGVsLmVycm9yTXNnIDogZGVmYXVsdE1vZGVsLmVycm9yTXNnO1xuICAgICAgcmVzdWx0W2tleV0gPSB7dmFsdWU6IGNvbnRyb2wudmFsdWV9O1xuICAgICAgaWYgKG1vZGVsLmVycm9yTXNnS2V5KSB7XG4gICAgICAgIHJlc3VsdFtrZXldW2Vycm9yTXNnS2V5XSA9IGVycm9yTXNnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0W2tleV1bZXJyb3JNc2dLZXldID0gZXJyb3JNc2c7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfVxufVxuIl19
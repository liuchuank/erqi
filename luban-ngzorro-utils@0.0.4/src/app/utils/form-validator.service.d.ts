import { ValidatorFn } from '@angular/forms';
import { FormValidatorModel } from '../models/form-validator.model';
export declare class FormValidatorService {
    constructor();
    /**
     * 验证是否全为中文
     * @param model:
     */
    chinese(model?: FormValidatorModel | any): ValidatorFn;
    /**
     * 字母数字
     * @param model:
     */
    alphanumeric(model?: FormValidatorModel | any): ValidatorFn;
    /**
     * 根据输入正则校验
     * @param model:
     */
    regex(model: FormValidatorModel): ValidatorFn;
    /**
     * 身份证
     * @param model:
     */
    identityCard(model?: FormValidatorModel | any): ValidatorFn;
    /**
     * 邮箱
     * @param model:
     */
    email(model?: FormValidatorModel | any): ValidatorFn;
    /**
     * 手机号
     * @param model:
     */
    mobile(model?: FormValidatorModel | any): ValidatorFn;
    /**
     * url
     * @param model:
     */
    url(model?: FormValidatorModel | any): ValidatorFn;
    /**
     * 整数
     * @param model:
     */
    integer(model?: FormValidatorModel | any): ValidatorFn;
    /**
     * 数字验证
     * @param model:
     */
    decimal(model?: FormValidatorModel | any): ValidatorFn;
    byteLength(model?: FormValidatorModel | any): ValidatorFn;
    private buildReturnResult;
}

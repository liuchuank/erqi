import { DataTypeUtils, ObjectUtils, RegexpUtils } from 'great-jsutils';
import { __decorate, __metadata } from 'tslib';
import { ɵɵdefineInjectable, Injectable, ɵɵinject, NgModule } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';
import { NzMessageService as NzMessageService$1 } from 'ng-zorro-antd/message';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

class FormValidatorModel {
    static init(obj) {
        const model = new FormValidatorModel();
        if (DataTypeUtils.isString(obj)) {
            model.value = obj;
        }
        else if (obj instanceof FormValidatorModel) {
            return obj;
        }
        else if (DataTypeUtils.isObject(obj)) {
            ObjectUtils.clone(obj, model);
        }
        return model;
    }
    defaultValue(errorMsg = '校验未通过') {
        const model = new FormValidatorModel();
        model.key = 'pattern';
        model.errorMsgKey = 'error';
        model.errorMsg = errorMsg;
        return model;
    }
}

/**
 * http请求响应后，是否在http-util中统一提醒
 */
var HttpResponseAlertStatus;
(function (HttpResponseAlertStatus) {
    HttpResponseAlertStatus[HttpResponseAlertStatus["ALL"] = 1] = "ALL";
    HttpResponseAlertStatus[HttpResponseAlertStatus["SUCCESS"] = 2] = "SUCCESS";
    HttpResponseAlertStatus[HttpResponseAlertStatus["FAIL"] = 3] = "FAIL";
    HttpResponseAlertStatus[HttpResponseAlertStatus["NONE"] = 4] = "NONE"; // 不作统一消息提醒
})(HttpResponseAlertStatus || (HttpResponseAlertStatus = {}));

/**
 * 分页数据
 */
class PageInfo {
    constructor(pageNum, // 当前页码（与current冗余，推荐用pageNum）
    pageSize, // 每页行数（与size冗余，推荐用pageSize）
    pages, // 总页数
    list, // 实际数据集合
    total, // 总行数
    current, // 当前页码
    size, // 当前页实际多少行
    totalPages, // 总页数
    totalRows, // 总行数
    rows, // 实际数据
    endRow, // 当前页结束行号，基于1为第一行
    startRow, // 当前页开始行号，基于1为第一行
    resultCode, resultMsg) {
        this.pageNum = pageNum;
        this.pageSize = pageSize;
        this.pages = pages;
        this.list = list;
        this.total = total;
        this.current = current;
        this.size = size;
        this.totalPages = totalPages;
        this.totalRows = totalRows;
        this.rows = rows;
        this.endRow = endRow;
        this.startRow = startRow;
        this.resultCode = resultCode;
        this.resultMsg = resultMsg;
        if (this.pageNum) {
            this.current = this.pageNum;
        }
        if (this.pageSize) {
            this.size = this.size;
        }
        // 当前页码
        this.pageNum = !pageNum ? 1 : pageNum;
        this.pageSize = !pageSize ? 20 : pageSize;
        this.size = !size ? 20 : size;
        this.totalRows = !totalRows ? 0 : totalRows;
        this.total = !total ? 0 : total;
        this.list = !list ? [] : list;
        this.rows = !rows ? [] : rows;
    }
    get offset() {
        return this.pageNum - 1;
    }
    set offset(offset) {
        this.pageNum = offset + 1;
    }
    static fromJson(json) {
        if (!json) {
            return new PageInfo();
        }
        return Object.setPrototypeOf(json, PageInfo.prototype);
    }
}

class Result {
    constructor(resultCode, resultMsg, data) {
        this.resultCode = resultCode;
        this.resultMsg = resultMsg;
        this.data = data;
        this.defaultMessage = {
            '-1': '操作出现错误！',
            0: '操作失败！',
            1: '操作成功！',
            2: '操作成功，即将进行一下步操作！',
        };
    }
    static init(obj) {
        const model = new Result();
        if (typeof obj === 'string') {
            model.data = obj;
        }
        else if (obj instanceof Result) {
            return obj;
        }
        else if (typeof obj === 'object') {
            Object.keys(obj).forEach(key => {
                if (key in model) {
                    model[key] = obj[key];
                }
            });
        }
        return model;
    }
    /**
     * 判断是否成功
     */
    isSuccess() {
        return this.resultCode === 1 || this.resultCode === 2;
    }
    /**
     * 获取提醒消息
     */
    getMessage() {
        if (this.resultMsg) {
            return this.resultMsg;
        }
        else {
            const message = this.defaultMessage[this.resultCode];
            if (message) {
                return message;
            }
            else {
                return '未知的操作结果！';
            }
        }
    }
}

let CommonConfigService = class CommonConfigService {
    constructor() { }
    /**
     * 默认header信息
     */
    getDefaultHeader() {
        let headers = new HttpHeaders({
            'Authorization': 'bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW50aXR5Ijp7InVzZXJJZCI6IjEyNDMzOTI5NzM3NjgwMDc2OCIsInBhc3N3b3JkIjoiIiwidXNlckNvZGUiOiJqd3RUZXN0IiwidXNlclJlYWxOYW1lIjoibG9naW50ZXN0IiwidXNlclN0YXRlIjoiMCIsImNyZWF0ZVRpbWUiOm51bGwsImNyZWF0b3IiOm51bGwsImxhc3RNb2RpZnlUaW1lIjpudWxsLCJsYXN0TW9kaWZpZXIiOm51bGwsInZhbGlkVGltZSI6bnVsbCwiZXhwaXJlVGltZSI6bnVsbCwibG9ja1RvIjpudWxsLCJwaG9uZSI6IjE1NTU1NTU1NTU1IiwiZW1haWwiOiJsb2dpbnRlc3RAbGcuY29tIiwicHN3RXhwdGltZSI6bnVsbCwibm90ZSI6bnVsbCwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfVVNFUiJ9XSwiZW5hYmxlZCI6dHJ1ZSwidXNlcm5hbWUiOiJqd3RUZXN0IiwiYWRtaW4iOmZhbHNlLCJhY2NvdW50Tm9uRXhwaXJlZCI6dHJ1ZSwiY3JlZGVudGlhbHNOb25FeHBpcmVkIjp0cnVlLCJhY2NvdW50Tm9uTG9ja2VkIjp0cnVlfSwidXNlcl9uYW1lIjoiand0VGVzdCIsInNjb3BlIjpbImFsbCJdLCJleHAiOjE4NDc2ODY4MzMsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiJdLCJqdGkiOiJiMzdkMTc1Ny01NmUxLTQzMTAtYmYxNC1mNjZmZmE1M2Q0MjMiLCJjbGllbnRfaWQiOiI5MDAxMDAxMDEwIn0.D-fkT7yWtpXw_LkE4_6-EuMYI2-AYsYttDcl0RNgdyFNM0V9s9I0-ihH53hsS-X1NhYvgfLKQSRmlZZFDUrpAWuh_eIVw5YmY686u-GqN8LwpAInd5ECUGPNQ3-yb4W-rIhopNPOZONYRH8f12eAly-BE-8tFZhDei0SuW-k9OVHyqfu7LRPwPUl4DLbSrLxvit3-_SQ40syUkCWRPPZBB_wAIzHfXOZxvRUBjXjRS78D1xTFPiNolq-UukOcQbzNw00c7IE-k9r9geu1SXUm1i4XDVWFpl2Xq921nzyRldvf7vDmMpUDdat7jnOEVsE2kOkF3LwljphH2ErpSygqg'
        });
        return headers;
    }
    /**
     * 存放登录用户信息
     * @param loginUser
     */
    setLoginUser(loginUser) {
        if (loginUser) {
            sessionStorage.setItem("luban_login_user", JSON.stringify(loginUser));
        }
    }
    /**
     * 获取登录用户信息
     */
    getLoginUser() {
        let loginUserStr = sessionStorage.getItem("luban_login_user");
        if (loginUserStr) {
            return JSON.parse(loginUserStr);
        }
        else {
            return null;
        }
    }
};
CommonConfigService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CommonConfigService_Factory() { return new CommonConfigService(); }, token: CommonConfigService, providedIn: "root" });
CommonConfigService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], CommonConfigService);

let FormValidatorService = class FormValidatorService {
    constructor() {
    }
    /**
     * 验证是否全为中文
     * @param model:
     */
    chinese(model) {
        model = FormValidatorModel.init(model);
        const regExp = /^[\u4e00-\u9fa5]+$/;
        return (control) => {
            if (!control.value) {
                return null;
            }
            const result = regExp.test(control.value);
            return this.buildReturnResult(result, model, control);
        };
    }
    /**
     * 字母数字
     * @param model:
     */
    alphanumeric(model) {
        model = FormValidatorModel.init(model);
        const regExp = /^[A-Za-z0-9]+$/;
        return (control) => {
            const result = regExp.test(control.value);
            return this.buildReturnResult(result, model, control);
        };
    }
    /**
     * 根据输入正则校验
     * @param model:
     */
    regex(model) {
        model = FormValidatorModel.init(model);
        const regExp = model.value;
        return (control) => {
            const result = regExp.test(control.value);
            return this.buildReturnResult(result, model, control);
        };
    }
    /**
     * 身份证
     * @param model:
     */
    identityCard(model) {
        model = FormValidatorModel.init(model);
        const regExp = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
        return (control) => {
            const result = regExp.test(control.value);
            return this.buildReturnResult(result, model, control);
        };
    }
    /**
     * 邮箱
     * @param model:
     */
    email(model) {
        model = FormValidatorModel.init(model);
        const regExp = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        return (control) => {
            const result = regExp.test(control.value);
            return this.buildReturnResult(result, model, control);
        };
    }
    /**
     * 手机号
     * @param model:
     */
    mobile(model) {
        model = FormValidatorModel.init(model);
        const regExp = /^[1][3,4,5,7,8][0-9]{9}$/;
        return (control) => {
            const result = regExp.test(control.value);
            return this.buildReturnResult(result, model, control);
        };
    }
    /**
     * url
     * @param model:
     */
    url(model) {
        model = FormValidatorModel.init(model);
        const regExp = /^((ht|f)tps?):\/\/([\w\-]+(\.[\w\-]+)*\/)*[\w\-]+(\.[\w\-]+)*\/?(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?/;
        return (control) => {
            if (control.value && model.trimLR) {
                control.setValue(control.value.trim());
            }
            const result = regExp.test(control.value);
            return this.buildReturnResult(result, model, control);
        };
    }
    /**
     * 整数
     * @param model:
     */
    integer(model) {
        model = FormValidatorModel.init(model);
        const regExp = /^\d+$/;
        return (control) => {
            const result = regExp.test(control.value);
            return this.buildReturnResult(result, model, control);
        };
    }
    /**
     * 数字验证
     * @param model:
     */
    decimal(model) {
        model = FormValidatorModel.init(model);
        return (control) => {
            let options = {};
            if (model.scale) {
                options = { scale: model.scale };
            }
            else if (model.maxScale) {
                options = { scale: model.maxScale };
            }
            if (model.min) {
                options = Object.assign({}, options, { min: model.min });
            }
            if (model.max) {
                options = Object.assign({}, options, { max: model.max });
            }
            const result = RegexpUtils.isNumber(control.value, options);
            return this.buildReturnResult(result, model, control);
        };
    }
    byteLength(model) {
        model = FormValidatorModel.init(model);
        return (control) => {
            if (!control.value) {
                return null;
            }
            let options = {};
            if (model.minLength) {
                options = { minLength: model.minLength };
            }
            else if (model.maxLength) {
                options = { maxLength: model.maxLength };
            }
            if (control.value && model.trimLR) {
                control.setValue(control.value.trim());
            }
            const result = RegexpUtils.byteLength(control.value, options);
            return this.buildReturnResult(result, model, control);
        };
    }
    buildReturnResult(regExpResult, model, control) {
        if (model.maxLength && regExpResult) {
            regExpResult = control.value.length <= model.maxLength;
        }
        if (model.minLength && regExpResult) {
            regExpResult = control.value.length >= model.minLength;
        }
        const defaultModel = model.defaultValue();
        if (regExpResult) {
            return null;
        }
        else {
            const result = {};
            const key = !!model.key ? model.key : defaultModel.key;
            const errorMsgKey = !!model.errorMsgKey ? model.errorMsgKey : defaultModel.errorMsgKey;
            const errorMsg = !!model.errorMsg ? model.errorMsg : defaultModel.errorMsg;
            result[key] = { value: control.value };
            if (model.errorMsgKey) {
                result[key][errorMsgKey] = errorMsg;
            }
            else {
                result[key][errorMsgKey] = errorMsg;
            }
            return result;
        }
    }
};
FormValidatorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function FormValidatorService_Factory() { return new FormValidatorService(); }, token: FormValidatorService, providedIn: "root" });
FormValidatorService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], FormValidatorService);

let MessageService = class MessageService {
    constructor(message) {
        this.message = message;
    }
    /**
     * 默认的消息提醒
     * @param resust:返回的结果
     * @param status:成功或失败是否提醒
     */
    default(resust, status = HttpResponseAlertStatus.ALL) {
        if (resust && resust.isSuccess() && (status === HttpResponseAlertStatus.ALL || status === HttpResponseAlertStatus.SUCCESS)) {
            this.success(resust.resultMsg);
        }
        else if (resust && !resust.isSuccess() && (status === HttpResponseAlertStatus.ALL || status === HttpResponseAlertStatus.FAIL)) {
            this.error(resust.resultMsg);
        }
    }
    /**
     * 操作成功的消息
     * @param message:需要提醒的消息
     */
    success(message = '操作成功！') {
        this.message.create('success', message);
    }
    /**
     * 操作失败的消息
     * @param message:需要提醒的消息
     */
    error(message = '操作失败！') {
        this.message.create('error', message);
    }
    /**
     * 操作有误的消息
     * @param message:需要提醒的消息
     */
    warning(message = '操作有误！') {
        this.message.create('warning', message);
    }
};
MessageService.ctorParameters = () => [
    { type: NzMessageService }
];
MessageService.ngInjectableDef = ɵɵdefineInjectable({ factory: function MessageService_Factory() { return new MessageService(ɵɵinject(NzMessageService$1)); }, token: MessageService, providedIn: "root" });
MessageService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [NzMessageService])
], MessageService);

let HttpUtilService = class HttpUtilService {
    constructor(http, messageService) {
        this.http = http;
        this.messageService = messageService;
    }
    /** GET请求处理（一般用于获取数据） **/
    get(url, data = {}, status = HttpResponseAlertStatus.ALL) {
        return this.http.get(url, data).pipe(map(restResponse => {
            return this.callback(restResponse, status);
        }), catchError(this.handleError(url, [])));
    }
    /** POST请求处理（一般用于保存数据） **/
    post(url, data = {}, httpOptions = {}, status = HttpResponseAlertStatus.ALL) {
        return this.http.post(url, data, httpOptions).pipe(map(restResponse => {
            return this.callback(restResponse, status);
        }), catchError(this.handleError(url, [])));
    }
    /** PUT请求处理（一般用于更新数据） **/
    put(url, data = {}, httpOptions = {}, status = HttpResponseAlertStatus.ALL) {
        return this.http.put(url, data).pipe(map(restResponse => {
            return this.callback(restResponse, status);
        }), catchError(this.handleError(url, [])));
    }
    /** DELETE请求处理（一般用于删除数据） **/
    delete(url, data = {}, status = HttpResponseAlertStatus.ALL) {
        return this.http.delete(url, data).pipe(map(restResponse => {
            return this.callback(restResponse, status);
        }), catchError(this.handleError(url, [])));
    }
    callback(response, status) {
        response = Result.init(response);
        if (!response) {
            this.messageService.error('未获取到数据！');
        }
        if (status !== HttpResponseAlertStatus.NONE) {
            this.messageService.default(response, status);
        }
        return response;
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return of(result);
        };
    }
};
HttpUtilService.ctorParameters = () => [
    { type: HttpClient },
    { type: MessageService }
];
HttpUtilService.ngInjectableDef = ɵɵdefineInjectable({ factory: function HttpUtilService_Factory() { return new HttpUtilService(ɵɵinject(HttpClient), ɵɵinject(MessageService)); }, token: HttpUtilService, providedIn: "root" });
HttpUtilService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [HttpClient,
        MessageService])
], HttpUtilService);

const srvices = [
    CommonConfigService,
    FormValidatorService,
    MessageService
];
let LubanUtilsModule = class LubanUtilsModule {
};
LubanUtilsModule = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        providers: [
            ...srvices
        ]
    })
], LubanUtilsModule);

/**
 * Generated bundle index. Do not edit.
 */

export { CommonConfigService, FormValidatorModel, FormValidatorService, HttpResponseAlertStatus, HttpUtilService, LubanUtilsModule, MessageService, PageInfo, Result };
//# sourceMappingURL=luban-ngzorro-utils.js.map

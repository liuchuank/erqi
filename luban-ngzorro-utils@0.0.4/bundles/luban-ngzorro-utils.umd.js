(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('great-jsutils'), require('@angular/core'), require('@angular/common/http'), require('ng-zorro-antd'), require('ng-zorro-antd/message'), require('rxjs'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('luban-ngzorro-utils', ['exports', 'great-jsutils', '@angular/core', '@angular/common/http', 'ng-zorro-antd', 'ng-zorro-antd/message', 'rxjs', 'rxjs/operators', '@angular/common'], factory) :
    (global = global || self, factory(global['luban-ngzorro-utils'] = {}, global.greatJsutils, global.ng.core, global.ng.common.http, global.ngZorroAntd, global.message, global.rxjs, global.rxjs.operators, global.ng.common));
}(this, function (exports, greatJsutils, core, http, ngZorroAntd, message, rxjs, operators, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var FormValidatorModel = /** @class */ (function () {
        function FormValidatorModel() {
        }
        FormValidatorModel.init = function (obj) {
            var model = new FormValidatorModel();
            if (greatJsutils.DataTypeUtils.isString(obj)) {
                model.value = obj;
            }
            else if (obj instanceof FormValidatorModel) {
                return obj;
            }
            else if (greatJsutils.DataTypeUtils.isObject(obj)) {
                greatJsutils.ObjectUtils.clone(obj, model);
            }
            return model;
        };
        FormValidatorModel.prototype.defaultValue = function (errorMsg) {
            if (errorMsg === void 0) { errorMsg = '校验未通过'; }
            var model = new FormValidatorModel();
            model.key = 'pattern';
            model.errorMsgKey = 'error';
            model.errorMsg = errorMsg;
            return model;
        };
        return FormValidatorModel;
    }());

    /**
     * http请求响应后，是否在http-util中统一提醒
     */

    (function (HttpResponseAlertStatus) {
        HttpResponseAlertStatus[HttpResponseAlertStatus["ALL"] = 1] = "ALL";
        HttpResponseAlertStatus[HttpResponseAlertStatus["SUCCESS"] = 2] = "SUCCESS";
        HttpResponseAlertStatus[HttpResponseAlertStatus["FAIL"] = 3] = "FAIL";
        HttpResponseAlertStatus[HttpResponseAlertStatus["NONE"] = 4] = "NONE"; // 不作统一消息提醒
    })(exports.HttpResponseAlertStatus || (exports.HttpResponseAlertStatus = {}));

    /**
     * 分页数据
     */
    var PageInfo = /** @class */ (function () {
        function PageInfo(pageNum, // 当前页码（与current冗余，推荐用pageNum）
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
        Object.defineProperty(PageInfo.prototype, "offset", {
            get: function () {
                return this.pageNum - 1;
            },
            set: function (offset) {
                this.pageNum = offset + 1;
            },
            enumerable: true,
            configurable: true
        });
        PageInfo.fromJson = function (json) {
            if (!json) {
                return new PageInfo();
            }
            return Object.setPrototypeOf(json, PageInfo.prototype);
        };
        return PageInfo;
    }());

    var Result = /** @class */ (function () {
        function Result(resultCode, resultMsg, data) {
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
        Result.init = function (obj) {
            var model = new Result();
            if (typeof obj === 'string') {
                model.data = obj;
            }
            else if (obj instanceof Result) {
                return obj;
            }
            else if (typeof obj === 'object') {
                Object.keys(obj).forEach(function (key) {
                    if (key in model) {
                        model[key] = obj[key];
                    }
                });
            }
            return model;
        };
        /**
         * 判断是否成功
         */
        Result.prototype.isSuccess = function () {
            return this.resultCode === 1 || this.resultCode === 2;
        };
        /**
         * 获取提醒消息
         */
        Result.prototype.getMessage = function () {
            if (this.resultMsg) {
                return this.resultMsg;
            }
            else {
                var message = this.defaultMessage[this.resultCode];
                if (message) {
                    return message;
                }
                else {
                    return '未知的操作结果！';
                }
            }
        };
        return Result;
    }());

    var CommonConfigService = /** @class */ (function () {
        function CommonConfigService() {
        }
        /**
         * 默认header信息
         */
        CommonConfigService.prototype.getDefaultHeader = function () {
            var headers = new http.HttpHeaders({
                'Authorization': 'bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW50aXR5Ijp7InVzZXJJZCI6IjEyNDMzOTI5NzM3NjgwMDc2OCIsInBhc3N3b3JkIjoiIiwidXNlckNvZGUiOiJqd3RUZXN0IiwidXNlclJlYWxOYW1lIjoibG9naW50ZXN0IiwidXNlclN0YXRlIjoiMCIsImNyZWF0ZVRpbWUiOm51bGwsImNyZWF0b3IiOm51bGwsImxhc3RNb2RpZnlUaW1lIjpudWxsLCJsYXN0TW9kaWZpZXIiOm51bGwsInZhbGlkVGltZSI6bnVsbCwiZXhwaXJlVGltZSI6bnVsbCwibG9ja1RvIjpudWxsLCJwaG9uZSI6IjE1NTU1NTU1NTU1IiwiZW1haWwiOiJsb2dpbnRlc3RAbGcuY29tIiwicHN3RXhwdGltZSI6bnVsbCwibm90ZSI6bnVsbCwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfVVNFUiJ9XSwiZW5hYmxlZCI6dHJ1ZSwidXNlcm5hbWUiOiJqd3RUZXN0IiwiYWRtaW4iOmZhbHNlLCJhY2NvdW50Tm9uRXhwaXJlZCI6dHJ1ZSwiY3JlZGVudGlhbHNOb25FeHBpcmVkIjp0cnVlLCJhY2NvdW50Tm9uTG9ja2VkIjp0cnVlfSwidXNlcl9uYW1lIjoiand0VGVzdCIsInNjb3BlIjpbImFsbCJdLCJleHAiOjE4NDc2ODY4MzMsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiJdLCJqdGkiOiJiMzdkMTc1Ny01NmUxLTQzMTAtYmYxNC1mNjZmZmE1M2Q0MjMiLCJjbGllbnRfaWQiOiI5MDAxMDAxMDEwIn0.D-fkT7yWtpXw_LkE4_6-EuMYI2-AYsYttDcl0RNgdyFNM0V9s9I0-ihH53hsS-X1NhYvgfLKQSRmlZZFDUrpAWuh_eIVw5YmY686u-GqN8LwpAInd5ECUGPNQ3-yb4W-rIhopNPOZONYRH8f12eAly-BE-8tFZhDei0SuW-k9OVHyqfu7LRPwPUl4DLbSrLxvit3-_SQ40syUkCWRPPZBB_wAIzHfXOZxvRUBjXjRS78D1xTFPiNolq-UukOcQbzNw00c7IE-k9r9geu1SXUm1i4XDVWFpl2Xq921nzyRldvf7vDmMpUDdat7jnOEVsE2kOkF3LwljphH2ErpSygqg'
            });
            return headers;
        };
        /**
         * 存放登录用户信息
         * @param loginUser
         */
        CommonConfigService.prototype.setLoginUser = function (loginUser) {
            if (loginUser) {
                sessionStorage.setItem("luban_login_user", JSON.stringify(loginUser));
            }
        };
        /**
         * 获取登录用户信息
         */
        CommonConfigService.prototype.getLoginUser = function () {
            var loginUserStr = sessionStorage.getItem("luban_login_user");
            if (loginUserStr) {
                return JSON.parse(loginUserStr);
            }
            else {
                return null;
            }
        };
        CommonConfigService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function CommonConfigService_Factory() { return new CommonConfigService(); }, token: CommonConfigService, providedIn: "root" });
        CommonConfigService = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __metadata("design:paramtypes", [])
        ], CommonConfigService);
        return CommonConfigService;
    }());

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
                    options = __assign({}, options, { min: model.min });
                }
                if (model.max) {
                    options = __assign({}, options, { max: model.max });
                }
                var result = greatJsutils.RegexpUtils.isNumber(control.value, options);
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
                var result = greatJsutils.RegexpUtils.byteLength(control.value, options);
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
        FormValidatorService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function FormValidatorService_Factory() { return new FormValidatorService(); }, token: FormValidatorService, providedIn: "root" });
        FormValidatorService = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __metadata("design:paramtypes", [])
        ], FormValidatorService);
        return FormValidatorService;
    }());

    var MessageService = /** @class */ (function () {
        function MessageService(message) {
            this.message = message;
        }
        /**
         * 默认的消息提醒
         * @param resust:返回的结果
         * @param status:成功或失败是否提醒
         */
        MessageService.prototype.default = function (resust, status) {
            if (status === void 0) { status = exports.HttpResponseAlertStatus.ALL; }
            if (resust && resust.isSuccess() && (status === exports.HttpResponseAlertStatus.ALL || status === exports.HttpResponseAlertStatus.SUCCESS)) {
                this.success(resust.resultMsg);
            }
            else if (resust && !resust.isSuccess() && (status === exports.HttpResponseAlertStatus.ALL || status === exports.HttpResponseAlertStatus.FAIL)) {
                this.error(resust.resultMsg);
            }
        };
        /**
         * 操作成功的消息
         * @param message:需要提醒的消息
         */
        MessageService.prototype.success = function (message) {
            if (message === void 0) { message = '操作成功！'; }
            this.message.create('success', message);
        };
        /**
         * 操作失败的消息
         * @param message:需要提醒的消息
         */
        MessageService.prototype.error = function (message) {
            if (message === void 0) { message = '操作失败！'; }
            this.message.create('error', message);
        };
        /**
         * 操作有误的消息
         * @param message:需要提醒的消息
         */
        MessageService.prototype.warning = function (message) {
            if (message === void 0) { message = '操作有误！'; }
            this.message.create('warning', message);
        };
        MessageService.ctorParameters = function () { return [
            { type: ngZorroAntd.NzMessageService }
        ]; };
        MessageService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MessageService_Factory() { return new MessageService(core.ɵɵinject(message.NzMessageService)); }, token: MessageService, providedIn: "root" });
        MessageService = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __metadata("design:paramtypes", [ngZorroAntd.NzMessageService])
        ], MessageService);
        return MessageService;
    }());

    var HttpUtilService = /** @class */ (function () {
        function HttpUtilService(http, messageService) {
            this.http = http;
            this.messageService = messageService;
        }
        /** GET请求处理（一般用于获取数据） **/
        HttpUtilService.prototype.get = function (url, data, status) {
            var _this = this;
            if (data === void 0) { data = {}; }
            if (status === void 0) { status = exports.HttpResponseAlertStatus.ALL; }
            return this.http.get(url, data).pipe(operators.map(function (restResponse) {
                return _this.callback(restResponse, status);
            }), operators.catchError(this.handleError(url, [])));
        };
        /** POST请求处理（一般用于保存数据） **/
        HttpUtilService.prototype.post = function (url, data, httpOptions, status) {
            var _this = this;
            if (data === void 0) { data = {}; }
            if (httpOptions === void 0) { httpOptions = {}; }
            if (status === void 0) { status = exports.HttpResponseAlertStatus.ALL; }
            return this.http.post(url, data, httpOptions).pipe(operators.map(function (restResponse) {
                return _this.callback(restResponse, status);
            }), operators.catchError(this.handleError(url, [])));
        };
        /** PUT请求处理（一般用于更新数据） **/
        HttpUtilService.prototype.put = function (url, data, httpOptions, status) {
            var _this = this;
            if (data === void 0) { data = {}; }
            if (httpOptions === void 0) { httpOptions = {}; }
            if (status === void 0) { status = exports.HttpResponseAlertStatus.ALL; }
            return this.http.put(url, data).pipe(operators.map(function (restResponse) {
                return _this.callback(restResponse, status);
            }), operators.catchError(this.handleError(url, [])));
        };
        /** DELETE请求处理（一般用于删除数据） **/
        HttpUtilService.prototype.delete = function (url, data, status) {
            var _this = this;
            if (data === void 0) { data = {}; }
            if (status === void 0) { status = exports.HttpResponseAlertStatus.ALL; }
            return this.http.delete(url, data).pipe(operators.map(function (restResponse) {
                return _this.callback(restResponse, status);
            }), operators.catchError(this.handleError(url, [])));
        };
        HttpUtilService.prototype.callback = function (response, status) {
            response = Result.init(response);
            if (!response) {
                this.messageService.error('未获取到数据！');
            }
            if (status !== exports.HttpResponseAlertStatus.NONE) {
                this.messageService.default(response, status);
            }
            return response;
        };
        /**
         * Handle Http operation that failed.
         * Let the app continue.
         * @param operation - name of the operation that failed
         * @param result - optional value to return as the observable result
         */
        HttpUtilService.prototype.handleError = function (operation, result) {
            if (operation === void 0) { operation = 'operation'; }
            return function (error) {
                // TODO: send the error to remote logging infrastructure
                console.error(error); // log to console instead
                // TODO: better job of transforming error for user consumption
                console.log(operation + " failed: " + error.message);
                // Let the app keep running by returning an empty result.
                return rxjs.of(result);
            };
        };
        HttpUtilService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: MessageService }
        ]; };
        HttpUtilService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function HttpUtilService_Factory() { return new HttpUtilService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(MessageService)); }, token: HttpUtilService, providedIn: "root" });
        HttpUtilService = __decorate([
            core.Injectable({
                providedIn: 'root',
            }),
            __metadata("design:paramtypes", [http.HttpClient,
                MessageService])
        ], HttpUtilService);
        return HttpUtilService;
    }());

    var srvices = [
        CommonConfigService,
        FormValidatorService,
        MessageService
    ];
    var LubanUtilsModule = /** @class */ (function () {
        function LubanUtilsModule() {
        }
        LubanUtilsModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule
                ],
                providers: __spread(srvices)
            })
        ], LubanUtilsModule);
        return LubanUtilsModule;
    }());

    exports.CommonConfigService = CommonConfigService;
    exports.FormValidatorModel = FormValidatorModel;
    exports.FormValidatorService = FormValidatorService;
    exports.HttpUtilService = HttpUtilService;
    exports.LubanUtilsModule = LubanUtilsModule;
    exports.MessageService = MessageService;
    exports.PageInfo = PageInfo;
    exports.Result = Result;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=luban-ngzorro-utils.umd.js.map

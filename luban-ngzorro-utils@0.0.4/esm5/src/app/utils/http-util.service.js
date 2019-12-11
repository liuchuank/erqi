import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpResponseAlertStatus } from '../models/http-response-alert-status.model';
import { Result } from '../models/result.model';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./message.service";
var HttpUtilService = /** @class */ (function () {
    function HttpUtilService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
    }
    /** GET请求处理（一般用于获取数据） **/
    HttpUtilService.prototype.get = function (url, data, status) {
        var _this = this;
        if (data === void 0) { data = {}; }
        if (status === void 0) { status = HttpResponseAlertStatus.ALL; }
        return this.http.get(url, data).pipe(map(function (restResponse) {
            return _this.callback(restResponse, status);
        }), catchError(this.handleError(url, [])));
    };
    /** POST请求处理（一般用于保存数据） **/
    HttpUtilService.prototype.post = function (url, data, httpOptions, status) {
        var _this = this;
        if (data === void 0) { data = {}; }
        if (httpOptions === void 0) { httpOptions = {}; }
        if (status === void 0) { status = HttpResponseAlertStatus.ALL; }
        return this.http.post(url, data, httpOptions).pipe(map(function (restResponse) {
            return _this.callback(restResponse, status);
        }), catchError(this.handleError(url, [])));
    };
    /** PUT请求处理（一般用于更新数据） **/
    HttpUtilService.prototype.put = function (url, data, httpOptions, status) {
        var _this = this;
        if (data === void 0) { data = {}; }
        if (httpOptions === void 0) { httpOptions = {}; }
        if (status === void 0) { status = HttpResponseAlertStatus.ALL; }
        return this.http.put(url, data).pipe(map(function (restResponse) {
            return _this.callback(restResponse, status);
        }), catchError(this.handleError(url, [])));
    };
    /** DELETE请求处理（一般用于删除数据） **/
    HttpUtilService.prototype.delete = function (url, data, status) {
        var _this = this;
        if (data === void 0) { data = {}; }
        if (status === void 0) { status = HttpResponseAlertStatus.ALL; }
        return this.http.delete(url, data).pipe(map(function (restResponse) {
            return _this.callback(restResponse, status);
        }), catchError(this.handleError(url, [])));
    };
    HttpUtilService.prototype.callback = function (response, status) {
        response = Result.init(response);
        if (!response) {
            this.messageService.error('未获取到数据！');
        }
        if (status !== HttpResponseAlertStatus.NONE) {
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
            return of(result);
        };
    };
    HttpUtilService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: MessageService }
    ]; };
    HttpUtilService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function HttpUtilService_Factory() { return new HttpUtilService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.MessageService)); }, token: HttpUtilService, providedIn: "root" });
    HttpUtilService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            MessageService])
    ], HttpUtilService);
    return HttpUtilService;
}());
export { HttpUtilService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC11dGlsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sdWJhbi1uZ3pvcnJvLXV0aWxzLyIsInNvdXJjZXMiOlsic3JjL2FwcC91dGlscy9odHRwLXV0aWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDaEQsT0FBTyxFQUFhLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUMsVUFBVSxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw0Q0FBNEMsQ0FBQztBQUNuRixPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFLOUM7SUFFRSx5QkFBb0IsSUFBZ0IsRUFDaEIsY0FBOEI7UUFEOUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDbEQsQ0FBQztJQUVELHlCQUF5QjtJQUN6Qiw2QkFBRyxHQUFILFVBQUksR0FBVyxFQUFFLElBQWMsRUFBRSxNQUE2RDtRQUE5RixpQkFPQztRQVBnQixxQkFBQSxFQUFBLFNBQWM7UUFBRSx1QkFBQSxFQUFBLFNBQWtDLHVCQUF1QixDQUFDLEdBQUc7UUFDNUYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBZSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUNoRCxHQUFHLENBQUMsVUFBQSxZQUFZO1lBQ2QsT0FBTyxLQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcs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SyxDQUFDLE9BQVMsQ0FBQyxDQUFDO1lBQ3JELHlEQUF5RDtZQUN6RCxPQUFPLEVBQUUsQ0FBQyxNQUFXLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUM7SUFDSixDQUFDOztnQkF0RXlCLFVBQVU7Z0JBQ0EsY0FBYzs7O0lBSHZDLGVBQWU7UUFIM0IsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztpREFHMEIsVUFBVTtZQUNBLGNBQWM7T0FIdkMsZUFBZSxDQXlFM0I7MEJBcEZEO0NBb0ZDLEFBekVELElBeUVDO1NBekVZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge09ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7Y2F0Y2hFcnJvciwgbWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQge0h0dHBSZXNwb25zZUFsZXJ0U3RhdHVzfSBmcm9tICcuLi9tb2RlbHMvaHR0cC1yZXNwb25zZS1hbGVydC1zdGF0dXMubW9kZWwnO1xuaW1wb3J0IHtSZXN1bHR9IGZyb20gJy4uL21vZGVscy9yZXN1bHQubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgSHR0cFV0aWxTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgICAgICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKSB7XG4gIH1cblxuICAvKiogR0VU6K+35rGC5aSE55CG77yI5LiA6Iis55So5LqO6I635Y+W5pWw5o2u77yJICoqL1xuICBnZXQodXJsOiBzdHJpbmcsIGRhdGE6IGFueSA9IHt9LCBzdGF0dXM6IEh0dHBSZXNwb25zZUFsZXJ0U3RhdHVzID0gSHR0cFJlc3BvbnNlQWxlcnRTdGF0dXMuQUxMKTogT2JzZXJ2YWJsZTxSZXN1bHQgfCBhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxSZXN1bHQgfCBhbnk+KHVybCwgZGF0YSkucGlwZShcbiAgICAgIG1hcChyZXN0UmVzcG9uc2UgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWxsYmFjayhyZXN0UmVzcG9uc2UsIHN0YXR1cyk7XG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcih1cmwsIFtdKSksXG4gICAgKTtcbiAgfVxuXG4gIC8qKiBQT1NU6K+35rGC5aSE55CG77yI5LiA6Iis55So5LqO5L+d5a2Y5pWw5o2u77yJICoqL1xuICBwb3N0KHVybDogc3RyaW5nLCBkYXRhOiBhbnkgPSB7fSwgaHR0cE9wdGlvbnM6IGFueSA9IHt9LCBzdGF0dXM6IEh0dHBSZXNwb25zZUFsZXJ0U3RhdHVzID0gSHR0cFJlc3BvbnNlQWxlcnRTdGF0dXMuQUxMKTogT2JzZXJ2YWJsZTxSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8UmVzdWx0Pih1cmwsIGRhdGEsIGh0dHBPcHRpb25zKS5waXBlKFxuICAgICAgbWFwKHJlc3RSZXNwb25zZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbGxiYWNrKHJlc3RSZXNwb25zZSwgc3RhdHVzKTtcbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKHVybCwgW10pKSxcbiAgICApO1xuICB9XG5cbiAgLyoqIFBVVOivt+axguWkhOeQhu+8iOS4gOiIrOeUqOS6juabtOaWsOaVsOaNru+8iSAqKi9cbiAgcHV0KHVybDogc3RyaW5nLCBkYXRhOiBhbnkgPSB7fSwgaHR0cE9wdGlvbnM6IGFueSA9IHt9LCBzdGF0dXM6IEh0dHBSZXNwb25zZUFsZXJ0U3RhdHVzID0gSHR0cFJlc3BvbnNlQWxlcnRTdGF0dXMuQUxMKTogT2JzZXJ2YWJsZTxSZXN1bHQgfCBhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxSZXN1bHQgfCBhbnk+KHVybCwgZGF0YSkucGlwZShcbiAgICAgIG1hcChyZXN0UmVzcG9uc2UgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWxsYmFjayhyZXN0UmVzcG9uc2UsIHN0YXR1cyk7XG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcih1cmwsIFtdKSksXG4gICAgKTtcbiAgfVxuXG4gIC8qKiBERUxFVEXor7fmsYLlpITnkIbvvIjkuIDoiKznlKjkuo7liKDpmaTmlbDmja7vvIkgKiovXG4gIGRlbGV0ZSh1cmw6IHN0cmluZywgZGF0YTogYW55ID0ge30sIHN0YXR1czogSHR0cFJlc3BvbnNlQWxlcnRTdGF0dXMgPSBIdHRwUmVzcG9uc2VBbGVydFN0YXR1cy5BTEwpOiBPYnNlcnZhYmxlPFJlc3VsdCB8IGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPFJlc3VsdCB8IGFueT4odXJsLCBkYXRhKS5waXBlKFxuICAgICAgbWFwKHJlc3RSZXNwb25zZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbGxiYWNrKHJlc3RSZXNwb25zZSwgc3RhdHVzKTtcbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKHVybCwgW10pKSxcbiAgICApO1xuICB9XG5cbiAgY2FsbGJhY2socmVzcG9uc2UsIHN0YXR1czogSHR0cFJlc3BvbnNlQWxlcnRTdGF0dXMpIHtcbiAgICByZXNwb25zZSA9IFJlc3VsdC5pbml0KHJlc3BvbnNlKTtcbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmVycm9yKCfmnKrojrflj5bliLDmlbDmja7vvIEnKTtcbiAgICB9XG4gICAgaWYgKHN0YXR1cyAhPT0gSHR0cFJlc3BvbnNlQWxlcnRTdGF0dXMuTk9ORSkge1xuICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5kZWZhdWx0KHJlc3BvbnNlLCBzdGF0dXMpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIEh0dHAgb3BlcmF0aW9uIHRoYXQgZmFpbGVkLlxuICAgKiBMZXQgdGhlIGFwcCBjb250aW51ZS5cbiAgICogQHBhcmFtIG9wZXJhdGlvbiAtIG5hbWUgb2YgdGhlIG9wZXJhdGlvbiB0aGF0IGZhaWxlZFxuICAgKiBAcGFyYW0gcmVzdWx0IC0gb3B0aW9uYWwgdmFsdWUgdG8gcmV0dXJuIGFzIHRoZSBvYnNlcnZhYmxlIHJlc3VsdFxuICAgKi9cbiAgaGFuZGxlRXJyb3I8VD4ob3BlcmF0aW9uID0gJ29wZXJhdGlvbicsIHJlc3VsdD86IFQpIHtcbiAgICByZXR1cm4gKGVycm9yOiBhbnkpOiBPYnNlcnZhYmxlPFQ+ID0+IHtcbiAgICAgIC8vIFRPRE86IHNlbmQgdGhlIGVycm9yIHRvIHJlbW90ZSBsb2dnaW5nIGluZnJhc3RydWN0dXJlXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTsgLy8gbG9nIHRvIGNvbnNvbGUgaW5zdGVhZFxuICAgICAgLy8gVE9ETzogYmV0dGVyIGpvYiBvZiB0cmFuc2Zvcm1pbmcgZXJyb3IgZm9yIHVzZXIgY29uc3VtcHRpb25cbiAgICAgIGNvbnNvbGUubG9nKGAke29wZXJhdGlvbn0gZmFpbGVkOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICAvLyBMZXQgdGhlIGFwcCBrZWVwIHJ1bm5pbmcgYnkgcmV0dXJuaW5nIGFuIGVtcHR5IHJlc3VsdC5cbiAgICAgIHJldHVybiBvZihyZXN1bHQgYXMgVCk7XG4gICAgfTtcbiAgfVxufVxuIl19
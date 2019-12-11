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
HttpUtilService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function HttpUtilService_Factory() { return new HttpUtilService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.MessageService)); }, token: HttpUtilService, providedIn: "root" });
HttpUtilService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root',
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient,
        MessageService])
], HttpUtilService);
export { HttpUtilService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC11dGlsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sdWJhbi1uZ3pvcnJvLXV0aWxzLyIsInNvdXJjZXMiOlsic3JjL2FwcC91dGlscy9odHRwLXV0aWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDaEQsT0FBTyxFQUFhLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUMsVUFBVSxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw0Q0FBNEMsQ0FBQztBQUNuRixPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFLOUMsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQUUxQixZQUFvQixJQUFnQixFQUNoQixjQUE4QjtRQUQ5QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNsRCxDQUFDO0lBRUQseUJBQXlCO0lBQ3pCLEdBQUcsQ0FBQyxHQUFXLEVBQUUsT0FBWSxFQUFFLEVBQUUsU0FBa0MsdUJBQXVCLENBQUMsR0FBRztRQUM1RixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFlLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ2hELEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUNqQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMs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ZSxDQXlFM0I7U0F6RVksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtjYXRjaEVycm9yLCBtYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4vbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7SHR0cFJlc3BvbnNlQWxlcnRTdGF0dXN9IGZyb20gJy4uL21vZGVscy9odHRwLXJlc3BvbnNlLWFsZXJ0LXN0YXR1cy5tb2RlbCc7XG5pbXBvcnQge1Jlc3VsdH0gZnJvbSAnLi4vbW9kZWxzL3Jlc3VsdC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBIdHRwVXRpbFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHtcbiAgfVxuXG4gIC8qKiBHRVTor7fmsYLlpITnkIbvvIjkuIDoiKznlKjkuo7ojrflj5bmlbDmja7vvIkgKiovXG4gIGdldCh1cmw6IHN0cmluZywgZGF0YTogYW55ID0ge30sIHN0YXR1czogSHR0cFJlc3BvbnNlQWxlcnRTdGF0dXMgPSBIdHRwUmVzcG9uc2VBbGVydFN0YXR1cy5BTEwpOiBPYnNlcnZhYmxlPFJlc3VsdCB8IGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFJlc3VsdCB8IGFueT4odXJsLCBkYXRhKS5waXBlKFxuICAgICAgbWFwKHJlc3RSZXNwb25zZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbGxiYWNrKHJlc3RSZXNwb25zZSwgc3RhdHVzKTtcbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKHVybCwgW10pKSxcbiAgICApO1xuICB9XG5cbiAgLyoqIFBPU1Tor7fmsYLlpITnkIbvvIjkuIDoiKznlKjkuo7kv53lrZjmlbDmja7vvIkgKiovXG4gIHBvc3QodXJsOiBzdHJpbmcsIGRhdGE6IGFueSA9IHt9LCBodHRwT3B0aW9uczogYW55ID0ge30sIHN0YXR1czogSHR0cFJlc3BvbnNlQWxlcnRTdGF0dXMgPSBIdHRwUmVzcG9uc2VBbGVydFN0YXR1cy5BTEwpOiBPYnNlcnZhYmxlPFJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxSZXN1bHQ+KHVybCwgZGF0YSwgaHR0cE9wdGlvbnMpLnBpcGUoXG4gICAgICBtYXAocmVzdFJlc3BvbnNlID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsbGJhY2socmVzdFJlc3BvbnNlLCBzdGF0dXMpO1xuICAgICAgfSksXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IodXJsLCBbXSkpLFxuICAgICk7XG4gIH1cblxuICAvKiogUFVU6K+35rGC5aSE55CG77yI5LiA6Iis55So5LqO5pu05paw5pWw5o2u77yJICoqL1xuICBwdXQodXJsOiBzdHJpbmcsIGRhdGE6IGFueSA9IHt9LCBodHRwT3B0aW9uczogYW55ID0ge30sIHN0YXR1czogSHR0cFJlc3BvbnNlQWxlcnRTdGF0dXMgPSBIdHRwUmVzcG9uc2VBbGVydFN0YXR1cy5BTEwpOiBPYnNlcnZhYmxlPFJlc3VsdCB8IGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0PFJlc3VsdCB8IGFueT4odXJsLCBkYXRhKS5waXBlKFxuICAgICAgbWFwKHJlc3RSZXNwb25zZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbGxiYWNrKHJlc3RSZXNwb25zZSwgc3RhdHVzKTtcbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKHVybCwgW10pKSxcbiAgICApO1xuICB9XG5cbiAgLyoqIERFTEVUReivt+axguWkhOeQhu+8iOS4gOiIrOeUqOS6juWIoOmZpOaVsOaNru+8iSAqKi9cbiAgZGVsZXRlKHVybDogc3RyaW5nLCBkYXRhOiBhbnkgPSB7fSwgc3RhdHVzOiBIdHRwUmVzcG9uc2VBbGVydFN0YXR1cyA9IEh0dHBSZXNwb25zZUFsZXJ0U3RhdHVzLkFMTCk6IE9ic2VydmFibGU8UmVzdWx0IHwgYW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8UmVzdWx0IHwgYW55Pih1cmwsIGRhdGEpLnBpcGUoXG4gICAgICBtYXAocmVzdFJlc3BvbnNlID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsbGJhY2socmVzdFJlc3BvbnNlLCBzdGF0dXMpO1xuICAgICAgfSksXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IodXJsLCBbXSkpLFxuICAgICk7XG4gIH1cblxuICBjYWxsYmFjayhyZXNwb25zZSwgc3RhdHVzOiBIdHRwUmVzcG9uc2VBbGVydFN0YXR1cykge1xuICAgIHJlc3BvbnNlID0gUmVzdWx0LmluaXQocmVzcG9uc2UpO1xuICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuZXJyb3IoJ+acquiOt+WPluWIsOaVsOaNru+8gScpO1xuICAgIH1cbiAgICBpZiAoc3RhdHVzICE9PSBIdHRwUmVzcG9uc2VBbGVydFN0YXR1cy5OT05FKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmRlZmF1bHQocmVzcG9uc2UsIHN0YXR1cyk7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgSHR0cCBvcGVyYXRpb24gdGhhdCBmYWlsZWQuXG4gICAqIExldCB0aGUgYXBwIGNvbnRpbnVlLlxuICAgKiBAcGFyYW0gb3BlcmF0aW9uIC0gbmFtZSBvZiB0aGUgb3BlcmF0aW9uIHRoYXQgZmFpbGVkXG4gICAqIEBwYXJhbSByZXN1bHQgLSBvcHRpb25hbCB2YWx1ZSB0byByZXR1cm4gYXMgdGhlIG9ic2VydmFibGUgcmVzdWx0XG4gICAqL1xuICBoYW5kbGVFcnJvcjxUPihvcGVyYXRpb24gPSAnb3BlcmF0aW9uJywgcmVzdWx0PzogVCkge1xuICAgIHJldHVybiAoZXJyb3I6IGFueSk6IE9ic2VydmFibGU8VD4gPT4ge1xuICAgICAgLy8gVE9ETzogc2VuZCB0aGUgZXJyb3IgdG8gcmVtb3RlIGxvZ2dpbmcgaW5mcmFzdHJ1Y3R1cmVcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpOyAvLyBsb2cgdG8gY29uc29sZSBpbnN0ZWFkXG4gICAgICAvLyBUT0RPOiBiZXR0ZXIgam9iIG9mIHRyYW5zZm9ybWluZyBlcnJvciBmb3IgdXNlciBjb25zdW1wdGlvblxuICAgICAgY29uc29sZS5sb2coYCR7b3BlcmF0aW9ufSBmYWlsZWQ6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgIC8vIExldCB0aGUgYXBwIGtlZXAgcnVubmluZyBieSByZXR1cm5pbmcgYW4gZW1wdHkgcmVzdWx0LlxuICAgICAgcmV0dXJuIG9mKHJlc3VsdCBhcyBUKTtcbiAgICB9O1xuICB9XG59XG4iXX0=
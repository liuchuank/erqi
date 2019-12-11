import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { HttpResponseAlertStatus } from '../models/http-response-alert-status.model';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/message";
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
MessageService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MessageService_Factory() { return new MessageService(i0.ɵɵinject(i1.NzMessageService)); }, token: MessageService, providedIn: "root" });
MessageService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [NzMessageService])
], MessageService);
export { MessageService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbHViYW4tbmd6b3Jyby11dGlscy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbHMvbWVzc2FnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUvQyxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw0Q0FBNEMsQ0FBQzs7O0FBS25GLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFFekIsWUFBb0IsT0FBeUI7UUFBekIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7SUFDN0MsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxPQUFPLENBQUMsTUFBYyxFQUFFLE1BQU0sR0FBRyx1QkFBdUIsQ0FBQyxHQUFHO1FBQzFELElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sS0FBSyx1QkFBdUIsQ0FBQyxHQUFHLElBQUksTUFBTSxLQUFLLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzFILElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2hDO2FBQU0sSUFBSSxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLEtBQUssdUJBQXVCLENBQUMsR0FBRyxJQUFJLE1BQU0sS0FBSyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMvSCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM5QjtJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSCxPQUFPLENBQUMsT0FBTyxHQUFHLE9BQU87UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU87UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxPQUFPLENBQUMsT0FBTyxHQUFHLE9BQU87UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7Q0FDRixDQUFBOztZQXZDOEIsZ0JBQWdCOzs7QUFGbEMsY0FBYztJQUgxQixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDOzZDQUc2QixnQkFBZ0I7R0FGbEMsY0FBYyxDQXlDMUI7U0F6Q1ksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge056TWVzc2FnZVNlcnZpY2V9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuaW1wb3J0IHtSZXN1bHR9IGZyb20gJy4uL21vZGVscy9yZXN1bHQubW9kZWwnO1xuaW1wb3J0IHtIdHRwUmVzcG9uc2VBbGVydFN0YXR1c30gZnJvbSAnLi4vbW9kZWxzL2h0dHAtcmVzcG9uc2UtYWxlcnQtc3RhdHVzLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTWVzc2FnZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWVzc2FnZTogTnpNZXNzYWdlU2VydmljZSkge1xuICB9XG5cbiAgLyoqXG4gICAqIOm7mOiupOeahOa2iOaBr+aPkOmGklxuICAgKiBAcGFyYW0gcmVzdXN0Oui/lOWbnueahOe7k+aenFxuICAgKiBAcGFyYW0gc3RhdHVzOuaIkOWKn+aIluWksei0peaYr+WQpuaPkOmGklxuICAgKi9cbiAgZGVmYXVsdChyZXN1c3Q6IFJlc3VsdCwgc3RhdHVzID0gSHR0cFJlc3BvbnNlQWxlcnRTdGF0dXMuQUxMKSB7XG4gICAgaWYgKHJlc3VzdCAmJiByZXN1c3QuaXNTdWNjZXNzKCkgJiYgKHN0YXR1cyA9PT0gSHR0cFJlc3BvbnNlQWxlcnRTdGF0dXMuQUxMIHx8IHN0YXR1cyA9PT0gSHR0cFJlc3BvbnNlQWxlcnRTdGF0dXMuU1VDQ0VTUykpIHtcbiAgICAgIHRoaXMuc3VjY2VzcyhyZXN1c3QucmVzdWx0TXNnKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VzdCAmJiAhcmVzdXN0LmlzU3VjY2VzcygpICYmIChzdGF0dXMgPT09IEh0dHBSZXNwb25zZUFsZXJ0U3RhdHVzLkFMTCB8fCBzdGF0dXMgPT09IEh0dHBSZXNwb25zZUFsZXJ0U3RhdHVzLkZBSUwpKSB7XG4gICAgICB0aGlzLmVycm9yKHJlc3VzdC5yZXN1bHRNc2cpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDmk43kvZzmiJDlip/nmoTmtojmga9cbiAgICogQHBhcmFtIG1lc3NhZ2U66ZyA6KaB5o+Q6YaS55qE5raI5oGvXG4gICAqL1xuICBzdWNjZXNzKG1lc3NhZ2UgPSAn5pON5L2c5oiQ5Yqf77yBJyk6IHZvaWQge1xuICAgIHRoaXMubWVzc2FnZS5jcmVhdGUoJ3N1Y2Nlc3MnLCBtZXNzYWdlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmk43kvZzlpLHotKXnmoTmtojmga9cbiAgICogQHBhcmFtIG1lc3NhZ2U66ZyA6KaB5o+Q6YaS55qE5raI5oGvXG4gICAqL1xuICBlcnJvcihtZXNzYWdlID0gJ+aTjeS9nOWksei0pe+8gScpOiB2b2lkIHtcbiAgICB0aGlzLm1lc3NhZ2UuY3JlYXRlKCdlcnJvcicsIG1lc3NhZ2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIOaTjeS9nOacieivr+eahOa2iOaBr1xuICAgKiBAcGFyYW0gbWVzc2FnZTrpnIDopoHmj5DphpLnmoTmtojmga9cbiAgICovXG4gIHdhcm5pbmcobWVzc2FnZSA9ICfmk43kvZzmnInor6/vvIEnKTogdm9pZCB7XG4gICAgdGhpcy5tZXNzYWdlLmNyZWF0ZSgnd2FybmluZycsIG1lc3NhZ2UpO1xuICB9XG59XG4iXX0=
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { HttpResponseAlertStatus } from '../models/http-response-alert-status.model';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/message";
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
        if (status === void 0) { status = HttpResponseAlertStatus.ALL; }
        if (resust && resust.isSuccess() && (status === HttpResponseAlertStatus.ALL || status === HttpResponseAlertStatus.SUCCESS)) {
            this.success(resust.resultMsg);
        }
        else if (resust && !resust.isSuccess() && (status === HttpResponseAlertStatus.ALL || status === HttpResponseAlertStatus.FAIL)) {
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
        { type: NzMessageService }
    ]; };
    MessageService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MessageService_Factory() { return new MessageService(i0.ɵɵinject(i1.NzMessageService)); }, token: MessageService, providedIn: "root" });
    MessageService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [NzMessageService])
    ], MessageService);
    return MessageService;
}());
export { MessageService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbHViYW4tbmd6b3Jyby11dGlscy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbHMvbWVzc2FnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUvQyxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw0Q0FBNEMsQ0FBQzs7O0FBS25GO0lBRUUsd0JBQW9CLE9BQXlCO1FBQXpCLFlBQU8sR0FBUCxPQUFPLENBQWtCO0lBQzdDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsZ0NBQU8sR0FBUCxVQUFRLE1BQWMsRUFBRSxNQUFvQztRQUFwQyx1QkFBQSxFQUFBLFNBQVMsdUJBQXVCLENBQUMsR0FBRztRQUMxRCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLEtBQUssdUJBQXVCLENBQUMsR0FBRyxJQUFJLE1BQU0sS0FBSyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUMxSCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNoQzthQUFNLElBQUksTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxLQUFLLHVCQUF1QixDQUFDLEdBQUcsSUFBSSxNQUFNLEtBQUssdUJBQXVCLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDL0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZ0NBQU8sR0FBUCxVQUFRLE9BQWlCO1FBQWpCLHdCQUFBLEVBQUEsaUJBQWlCO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsOEJBQUssR0FBTCxVQUFNLE9BQWlCO1FBQWpCLHdCQUFBLEVBQUEsaUJBQWlCO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZ0NBQU8sR0FBUCxVQUFRLE9BQWlCO1FBQWpCLHdCQUFBLEVBQUEsaUJBQWlCO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDOztnQkF0QzRCLGdCQUFnQjs7O0lBRmxDLGNBQWM7UUFIMUIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztpREFHNkIsZ0JBQWdCO09BRmxDLGNBQWMsQ0F5QzFCO3lCQWpERDtDQWlEQyxBQXpDRCxJQXlDQztTQXpDWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TnpNZXNzYWdlU2VydmljZX0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQge1Jlc3VsdH0gZnJvbSAnLi4vbW9kZWxzL3Jlc3VsdC5tb2RlbCc7XG5pbXBvcnQge0h0dHBSZXNwb25zZUFsZXJ0U3RhdHVzfSBmcm9tICcuLi9tb2RlbHMvaHR0cC1yZXNwb25zZS1hbGVydC1zdGF0dXMubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtZXNzYWdlOiBOek1lc3NhZ2VTZXJ2aWNlKSB7XG4gIH1cblxuICAvKipcbiAgICog6buY6K6k55qE5raI5oGv5o+Q6YaSXG4gICAqIEBwYXJhbSByZXN1c3Q66L+U5Zue55qE57uT5p6cXG4gICAqIEBwYXJhbSBzdGF0dXM65oiQ5Yqf5oiW5aSx6LSl5piv5ZCm5o+Q6YaSXG4gICAqL1xuICBkZWZhdWx0KHJlc3VzdDogUmVzdWx0LCBzdGF0dXMgPSBIdHRwUmVzcG9uc2VBbGVydFN0YXR1cy5BTEwpIHtcbiAgICBpZiAocmVzdXN0ICYmIHJlc3VzdC5pc1N1Y2Nlc3MoKSAmJiAoc3RhdHVzID09PSBIdHRwUmVzcG9uc2VBbGVydFN0YXR1cy5BTEwgfHwgc3RhdHVzID09PSBIdHRwUmVzcG9uc2VBbGVydFN0YXR1cy5TVUNDRVNTKSkge1xuICAgICAgdGhpcy5zdWNjZXNzKHJlc3VzdC5yZXN1bHRNc2cpO1xuICAgIH0gZWxzZSBpZiAocmVzdXN0ICYmICFyZXN1c3QuaXNTdWNjZXNzKCkgJiYgKHN0YXR1cyA9PT0gSHR0cFJlc3BvbnNlQWxlcnRTdGF0dXMuQUxMIHx8IHN0YXR1cyA9PT0gSHR0cFJlc3BvbnNlQWxlcnRTdGF0dXMuRkFJTCkpIHtcbiAgICAgIHRoaXMuZXJyb3IocmVzdXN0LnJlc3VsdE1zZyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOaTjeS9nOaIkOWKn+eahOa2iOaBr1xuICAgKiBAcGFyYW0gbWVzc2FnZTrpnIDopoHmj5DphpLnmoTmtojmga9cbiAgICovXG4gIHN1Y2Nlc3MobWVzc2FnZSA9ICfmk43kvZzmiJDlip/vvIEnKTogdm9pZCB7XG4gICAgdGhpcy5tZXNzYWdlLmNyZWF0ZSgnc3VjY2VzcycsIG1lc3NhZ2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIOaTjeS9nOWksei0peeahOa2iOaBr1xuICAgKiBAcGFyYW0gbWVzc2FnZTrpnIDopoHmj5DphpLnmoTmtojmga9cbiAgICovXG4gIGVycm9yKG1lc3NhZ2UgPSAn5pON5L2c5aSx6LSl77yBJyk6IHZvaWQge1xuICAgIHRoaXMubWVzc2FnZS5jcmVhdGUoJ2Vycm9yJywgbWVzc2FnZSk7XG4gIH1cblxuICAvKipcbiAgICog5pON5L2c5pyJ6K+v55qE5raI5oGvXG4gICAqIEBwYXJhbSBtZXNzYWdlOumcgOimgeaPkOmGkueahOa2iOaBr1xuICAgKi9cbiAgd2FybmluZyhtZXNzYWdlID0gJ+aTjeS9nOacieivr++8gScpOiB2b2lkIHtcbiAgICB0aGlzLm1lc3NhZ2UuY3JlYXRlKCd3YXJuaW5nJywgbWVzc2FnZSk7XG4gIH1cbn1cbiJdfQ==
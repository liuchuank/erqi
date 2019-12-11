import { NzMessageService } from 'ng-zorro-antd';
import { Result } from '../models/result.model';
import { HttpResponseAlertStatus } from '../models/http-response-alert-status.model';
export declare class MessageService {
    private message;
    constructor(message: NzMessageService);
    /**
     * 默认的消息提醒
     * @param resust:返回的结果
     * @param status:成功或失败是否提醒
     */
    default(resust: Result, status?: HttpResponseAlertStatus): void;
    /**
     * 操作成功的消息
     * @param message:需要提醒的消息
     */
    success(message?: string): void;
    /**
     * 操作失败的消息
     * @param message:需要提醒的消息
     */
    error(message?: string): void;
    /**
     * 操作有误的消息
     * @param message:需要提醒的消息
     */
    warning(message?: string): void;
}

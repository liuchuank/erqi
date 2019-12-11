import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';
import { HttpResponseAlertStatus } from '../models/http-response-alert-status.model';
import { Result } from '../models/result.model';
export declare class HttpUtilService {
    private http;
    private messageService;
    constructor(http: HttpClient, messageService: MessageService);
    /** GET请求处理（一般用于获取数据） **/
    get(url: string, data?: any, status?: HttpResponseAlertStatus): Observable<Result | any>;
    /** POST请求处理（一般用于保存数据） **/
    post(url: string, data?: any, httpOptions?: any, status?: HttpResponseAlertStatus): Observable<Result>;
    /** PUT请求处理（一般用于更新数据） **/
    put(url: string, data?: any, httpOptions?: any, status?: HttpResponseAlertStatus): Observable<Result | any>;
    /** DELETE请求处理（一般用于删除数据） **/
    delete(url: string, data?: any, status?: HttpResponseAlertStatus): Observable<Result | any>;
    callback(response: any, status: HttpResponseAlertStatus): any;
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError<T>(operation?: string, result?: T): (error: any) => Observable<T>;
}

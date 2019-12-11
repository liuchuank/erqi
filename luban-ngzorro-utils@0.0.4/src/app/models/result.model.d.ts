export declare class Result {
    resultCode?: number;
    resultMsg?: string;
    data?: any;
    defaultMessage: {
        '-1': string;
        0: string;
        1: string;
        2: string;
    };
    constructor(resultCode?: number, resultMsg?: string, data?: any);
    [key: string]: any;
    static init(obj: any): Result;
    /**
     * 判断是否成功
     */
    isSuccess(): boolean;
    /**
     * 获取提醒消息
     */
    getMessage(): any;
}

import { HttpHeaders } from '@angular/common/http';
export declare class CommonConfigService {
    constructor();
    /**
     * 默认header信息
     */
    getDefaultHeader(): HttpHeaders;
    /**
     * 存放登录用户信息
     * @param loginUser
     */
    setLoginUser(loginUser: any): void;
    /**
     * 获取登录用户信息
     */
    getLoginUser(): any;
}

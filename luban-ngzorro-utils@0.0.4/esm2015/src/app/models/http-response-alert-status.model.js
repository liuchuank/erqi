/**
 * http请求响应后，是否在http-util中统一提醒
 */
export var HttpResponseAlertStatus;
(function (HttpResponseAlertStatus) {
    HttpResponseAlertStatus[HttpResponseAlertStatus["ALL"] = 1] = "ALL";
    HttpResponseAlertStatus[HttpResponseAlertStatus["SUCCESS"] = 2] = "SUCCESS";
    HttpResponseAlertStatus[HttpResponseAlertStatus["FAIL"] = 3] = "FAIL";
    HttpResponseAlertStatus[HttpResponseAlertStatus["NONE"] = 4] = "NONE"; // 不作统一消息提醒
})(HttpResponseAlertStatus || (HttpResponseAlertStatus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1yZXNwb25zZS1hbGVydC1zdGF0dXMubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sdWJhbi1uZ3pvcnJvLXV0aWxzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tb2RlbHMvaHR0cC1yZXNwb25zZS1hbGVydC1zdGF0dXMubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSCxNQUFNLENBQU4sSUFBWSx1QkFLWDtBQUxELFdBQVksdUJBQXVCO0lBQ2pDLG1FQUFNLENBQUE7SUFDTiwyRUFBVSxDQUFBO0lBQ1YscUVBQU8sQ0FBQTtJQUNQLHFFQUFJLENBQUEsQ0FBQyxXQUFXO0FBQ2xCLENBQUMsRUFMVyx1QkFBdUIsS0FBdkIsdUJBQXVCLFFBS2xDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIGh0dHDor7fmsYLlk43lupTlkI7vvIzmmK/lkKblnKhodHRwLXV0aWzkuK3nu5/kuIDmj5DphpJcclxuICovXHJcbmV4cG9ydCBlbnVtIEh0dHBSZXNwb25zZUFsZXJ0U3RhdHVzIHtcclxuICBBTEw9IDEsIC8vIOaXoOiuuuaIkOWKn+Wksei0pemDvea2iOaBr+aPkOmGklxyXG4gIFNVQ0NFU1M9IDIsIC8vIOS7heaIkOWKn+aXtua2iOaBr+aPkOmGklxyXG4gIEZBSUw9IDMsIC8vIOS7heWksei0peaXtua2iOaBr+aPkOmGklxyXG4gIE5PTkUgLy8g5LiN5L2c57uf5LiA5raI5oGv5o+Q6YaSXHJcbn1cclxuIl19
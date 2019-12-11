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
export { Result };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbHViYW4tbmd6b3Jyby11dGlscy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kZWxzL3Jlc3VsdC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQVNFLGdCQUFtQixVQUFtQixFQUNuQixTQUFrQixFQUNsQixJQUFVO1FBRlYsZUFBVSxHQUFWLFVBQVUsQ0FBUztRQUNuQixjQUFTLEdBQVQsU0FBUyxDQUFTO1FBQ2xCLFNBQUksR0FBSixJQUFJLENBQU07UUFUN0IsbUJBQWMsR0FBRztZQUNmLElBQUksRUFBRSxTQUFTO1lBQ2YsQ0FBQyxFQUFFLE9BQU87WUFDVixDQUFDLEVBQUUsT0FBTztZQUNWLENBQUMsRUFBRSxpQkFBaUI7U0FDckIsQ0FBQTtJQU1ELENBQUM7SUFJTSxXQUFJLEdBQVgsVUFBWSxHQUFRO1FBQ2xCLElBQU0sS0FBSyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7UUFDM0IsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDM0IsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7U0FDbEI7YUFBTSxJQUFJLEdBQUcsWUFBWSxNQUFNLEVBQUU7WUFDaEMsT0FBTyxHQUFHLENBQUM7U0FDWjthQUFNLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztnQkFDMUIsSUFBSSxHQUFHLElBQUksS0FBSyxFQUFFO29CQUNoQixLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN2QjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRDs7T0FFRztJQUNILDBCQUFTLEdBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRDs7T0FFRztJQUNILDJCQUFVLEdBQVY7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNyRCxJQUFJLE9BQU8sRUFBRTtnQkFDWCxPQUFPLE9BQU8sQ0FBQzthQUNoQjtpQkFBTTtnQkFDTCxPQUFPLFVBQVUsQ0FBQzthQUNuQjtTQUNGO0lBQ0gsQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDLEFBdkRELElBdURDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFJlc3VsdCB7XHJcblxyXG4gIGRlZmF1bHRNZXNzYWdlID0ge1xyXG4gICAgJy0xJzogJ+aTjeS9nOWHuueOsOmUmeivr++8gScsXHJcbiAgICAwOiAn5pON5L2c5aSx6LSl77yBJyxcclxuICAgIDE6ICfmk43kvZzmiJDlip/vvIEnLFxyXG4gICAgMjogJ+aTjeS9nOaIkOWKn++8jOWNs+Wwhui/m+ihjOS4gOS4i+atpeaTjeS9nO+8gScsXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVzdWx0Q29kZT86IG51bWJlcixcclxuICAgICAgICAgICAgICBwdWJsaWMgcmVzdWx0TXNnPzogc3RyaW5nLFxyXG4gICAgICAgICAgICAgIHB1YmxpYyBkYXRhPzogYW55LFxyXG4gICkge1xyXG4gIH1cclxuXHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG5cclxuICBzdGF0aWMgaW5pdChvYmo6IGFueSk6IFJlc3VsdCB7XHJcbiAgICBjb25zdCBtb2RlbCA9IG5ldyBSZXN1bHQoKTtcclxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJykge1xyXG4gICAgICBtb2RlbC5kYXRhID0gb2JqO1xyXG4gICAgfSBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBSZXN1bHQpIHtcclxuICAgICAgcmV0dXJuIG9iajtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgaWYgKGtleSBpbiBtb2RlbCkge1xyXG4gICAgICAgICAgbW9kZWxba2V5XSA9IG9ialtrZXldO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbW9kZWw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDliKTmlq3mmK/lkKbmiJDlip9cclxuICAgKi9cclxuICBpc1N1Y2Nlc3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXN1bHRDb2RlID09PSAxIHx8IHRoaXMucmVzdWx0Q29kZSA9PT0gMjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluaPkOmGkua2iOaBr1xyXG4gICAqL1xyXG4gIGdldE1lc3NhZ2UoKSB7XHJcbiAgICBpZiAodGhpcy5yZXN1bHRNc2cpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVzdWx0TXNnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuZGVmYXVsdE1lc3NhZ2VbdGhpcy5yZXN1bHRDb2RlXTtcclxuICAgICAgaWYgKG1lc3NhZ2UpIHtcclxuICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gJ+acquefpeeahOaTjeS9nOe7k+aenO+8gSc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
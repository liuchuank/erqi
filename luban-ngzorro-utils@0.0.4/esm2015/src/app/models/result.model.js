export class Result {
    constructor(resultCode, resultMsg, data) {
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
    static init(obj) {
        const model = new Result();
        if (typeof obj === 'string') {
            model.data = obj;
        }
        else if (obj instanceof Result) {
            return obj;
        }
        else if (typeof obj === 'object') {
            Object.keys(obj).forEach(key => {
                if (key in model) {
                    model[key] = obj[key];
                }
            });
        }
        return model;
    }
    /**
     * 判断是否成功
     */
    isSuccess() {
        return this.resultCode === 1 || this.resultCode === 2;
    }
    /**
     * 获取提醒消息
     */
    getMessage() {
        if (this.resultMsg) {
            return this.resultMsg;
        }
        else {
            const message = this.defaultMessage[this.resultCode];
            if (message) {
                return message;
            }
            else {
                return '未知的操作结果！';
            }
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbHViYW4tbmd6b3Jyby11dGlscy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kZWxzL3Jlc3VsdC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sTUFBTTtJQVNqQixZQUFtQixVQUFtQixFQUNuQixTQUFrQixFQUNsQixJQUFVO1FBRlYsZUFBVSxHQUFWLFVBQVUsQ0FBUztRQUNuQixjQUFTLEdBQVQsU0FBUyxDQUFTO1FBQ2xCLFNBQUksR0FBSixJQUFJLENBQU07UUFUN0IsbUJBQWMsR0FBRztZQUNmLElBQUksRUFBRSxTQUFTO1lBQ2YsQ0FBQyxFQUFFLE9BQU87WUFDVixDQUFDLEVBQUUsT0FBTztZQUNWLENBQUMsRUFBRSxpQkFBaUI7U0FDckIsQ0FBQTtJQU1ELENBQUM7SUFJRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQVE7UUFDbEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUMzQixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUMzQixLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztTQUNsQjthQUFNLElBQUksR0FBRyxZQUFZLE1BQU0sRUFBRTtZQUNoQyxPQUFPLEdBQUcsQ0FBQztTQUNaO2FBQU0sSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzdCLElBQUksR0FBRyxJQUFJLEtBQUssRUFBRTtvQkFDaEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDdkI7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQ7O09BRUc7SUFDSCxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxVQUFVO1FBQ1IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN2QjthQUFNO1lBQ0wsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDckQsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsT0FBTyxPQUFPLENBQUM7YUFDaEI7aUJBQU07Z0JBQ0wsT0FBTyxVQUFVLENBQUM7YUFDbkI7U0FDRjtJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBSZXN1bHQge1xyXG5cclxuICBkZWZhdWx0TWVzc2FnZSA9IHtcclxuICAgICctMSc6ICfmk43kvZzlh7rnjrDplJnor6/vvIEnLFxyXG4gICAgMDogJ+aTjeS9nOWksei0pe+8gScsXHJcbiAgICAxOiAn5pON5L2c5oiQ5Yqf77yBJyxcclxuICAgIDI6ICfmk43kvZzmiJDlip/vvIzljbPlsIbov5vooYzkuIDkuIvmraXmk43kvZzvvIEnLFxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHJlc3VsdENvZGU/OiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgcHVibGljIHJlc3VsdE1zZz86IHN0cmluZyxcclxuICAgICAgICAgICAgICBwdWJsaWMgZGF0YT86IGFueSxcclxuICApIHtcclxuICB9XHJcblxyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxuXHJcbiAgc3RhdGljIGluaXQob2JqOiBhbnkpOiBSZXN1bHQge1xyXG4gICAgY29uc3QgbW9kZWwgPSBuZXcgUmVzdWx0KCk7XHJcbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgbW9kZWwuZGF0YSA9IG9iajtcclxuICAgIH0gZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgUmVzdWx0KSB7XHJcbiAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgIGlmIChrZXkgaW4gbW9kZWwpIHtcclxuICAgICAgICAgIG1vZGVsW2tleV0gPSBvYmpba2V5XTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1vZGVsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Yik5pat5piv5ZCm5oiQ5YqfXHJcbiAgICovXHJcbiAgaXNTdWNjZXNzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVzdWx0Q29kZSA9PT0gMSB8fCB0aGlzLnJlc3VsdENvZGUgPT09IDI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDojrflj5bmj5DphpLmtojmga9cclxuICAgKi9cclxuICBnZXRNZXNzYWdlKCkge1xyXG4gICAgaWYgKHRoaXMucmVzdWx0TXNnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlc3VsdE1zZztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLmRlZmF1bHRNZXNzYWdlW3RoaXMucmVzdWx0Q29kZV07XHJcbiAgICAgIGlmIChtZXNzYWdlKSB7XHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICfmnKrnn6XnmoTmk43kvZznu5PmnpzvvIEnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
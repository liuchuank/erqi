import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CommonConfigService } from "./common-config.service";
import { FormValidatorService } from "./form-validator.service";
import { MessageService } from "./message.service";
var srvices = [
    CommonConfigService,
    FormValidatorService,
    MessageService
];
var LubanUtilsModule = /** @class */ (function () {
    function LubanUtilsModule() {
    }
    LubanUtilsModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule
            ],
            providers: tslib_1.__spread(srvices)
        })
    ], LubanUtilsModule);
    return LubanUtilsModule;
}());
export { LubanUtilsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHViYW4tdXRpbHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbHViYW4tbmd6b3Jyby11dGlscy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbHMvbHViYW4tdXRpbHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbkQsSUFBTSxPQUFPLEdBQUc7SUFDZCxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGNBQWM7Q0FDZixDQUFDO0FBVUY7SUFBQTtJQUNBLENBQUM7SUFEWSxnQkFBZ0I7UUFSNUIsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7YUFDYjtZQUNELFNBQVMsbUJBQ0osT0FBTyxDQUNYO1NBQ0YsQ0FBQztPQUNXLGdCQUFnQixDQUM1QjtJQUFELHVCQUFDO0NBQUEsQUFERCxJQUNDO1NBRFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IENvbW1vbkNvbmZpZ1NlcnZpY2UgfSBmcm9tIFwiLi9jb21tb24tY29uZmlnLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRm9ybVZhbGlkYXRvclNlcnZpY2UgfSBmcm9tIFwiLi9mb3JtLXZhbGlkYXRvci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4vbWVzc2FnZS5zZXJ2aWNlXCI7XHJcblxyXG5jb25zdCBzcnZpY2VzID0gW1xyXG4gIENvbW1vbkNvbmZpZ1NlcnZpY2UsXHJcbiAgRm9ybVZhbGlkYXRvclNlcnZpY2UsXHJcbiAgTWVzc2FnZVNlcnZpY2VcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIC4uLnNydmljZXNcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMdWJhblV0aWxzTW9kdWxlIHtcclxufVxyXG4iXX0=
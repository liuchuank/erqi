import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CommonConfigService } from "./common-config.service";
import { FormValidatorService } from "./form-validator.service";
import { MessageService } from "./message.service";
const srvices = [
    CommonConfigService,
    FormValidatorService,
    MessageService
];
let LubanUtilsModule = class LubanUtilsModule {
};
LubanUtilsModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        providers: [
            ...srvices
        ]
    })
], LubanUtilsModule);
export { LubanUtilsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHViYW4tdXRpbHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbHViYW4tbmd6b3Jyby11dGlscy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbHMvbHViYW4tdXRpbHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbkQsTUFBTSxPQUFPLEdBQUc7SUFDZCxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGNBQWM7Q0FDZixDQUFDO0FBVUYsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7Q0FDNUIsQ0FBQTtBQURZLGdCQUFnQjtJQVI1QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZO1NBQ2I7UUFDRCxTQUFTLEVBQUU7WUFDVCxHQUFHLE9BQU87U0FDWDtLQUNGLENBQUM7R0FDVyxnQkFBZ0IsQ0FDNUI7U0FEWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgQ29tbW9uQ29uZmlnU2VydmljZSB9IGZyb20gXCIuL2NvbW1vbi1jb25maWcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGb3JtVmFsaWRhdG9yU2VydmljZSB9IGZyb20gXCIuL2Zvcm0tdmFsaWRhdG9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tIFwiLi9tZXNzYWdlLnNlcnZpY2VcIjtcclxuXHJcbmNvbnN0IHNydmljZXMgPSBbXHJcbiAgQ29tbW9uQ29uZmlnU2VydmljZSxcclxuICBGb3JtVmFsaWRhdG9yU2VydmljZSxcclxuICBNZXNzYWdlU2VydmljZVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgLi4uc3J2aWNlc1xyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEx1YmFuVXRpbHNNb2R1bGUge1xyXG59XHJcbiJdfQ==
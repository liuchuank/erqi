export declare class FormValidatorModel {
    min: number;
    max: number;
    maxScale: number;
    scale: number;
    length: number;
    minLength: number;
    maxLength: number;
    trimL: boolean;
    trimR: boolean;
    trimLR: boolean;
    trim: boolean;
    value: any;
    key: string;
    errorMsgKey: string;
    errorMsg: string;
    [key: string]: any;
    static init(obj: any): FormValidatorModel;
    defaultValue(errorMsg?: string): FormValidatorModel;
}

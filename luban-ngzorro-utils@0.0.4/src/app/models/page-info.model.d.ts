/**
 * 分页数据
 */
export declare class PageInfo<T> {
    pageNum?: number;
    pageSize?: number;
    pages?: number;
    list?: Array<T>;
    total?: number;
    current?: number;
    size?: number;
    totalPages?: number;
    totalRows?: number;
    rows?: Array<T>;
    endRow?: number;
    startRow?: number;
    resultCode?: string;
    resultMsg?: string;
    [key: string]: any;
    constructor(pageNum?: number, // 当前页码（与current冗余，推荐用pageNum）
    pageSize?: number, // 每页行数（与size冗余，推荐用pageSize）
    pages?: number, // 总页数
    list?: Array<T>, // 实际数据集合
    total?: number, // 总行数
    current?: number, // 当前页码
    size?: number, // 当前页实际多少行
    totalPages?: number, // 总页数
    totalRows?: number, // 总行数
    rows?: Array<T>, // 实际数据
    endRow?: number, // 当前页结束行号，基于1为第一行
    startRow?: number, // 当前页开始行号，基于1为第一行
    resultCode?: string, resultMsg?: string);
    offset: number;
    static fromJson<T>(json: object): PageInfo<T>;
}

import { Report } from './report.schema';
export declare class PrinterReport extends Report {
    printerID: string;
}
export declare const PrinterReportSchema: import("mongoose").Schema<PrinterReport, import("mongoose").Model<PrinterReport, any, any, any, import("mongoose").Document<unknown, any, PrinterReport> & PrinterReport & Required<{
    _id: unknown;
}> & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PrinterReport, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<PrinterReport>> & import("mongoose").FlatRecord<PrinterReport> & Required<{
    _id: unknown;
}> & {
    __v?: number;
}>;

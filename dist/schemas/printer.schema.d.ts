import { Document } from "mongoose";
export declare class Printer extends Document {
    printerID: string;
    printHistory: {
        studentID: string;
        date: Date;
        pages: number;
    }[];
    paperChangeHistory: {
        date: Date;
        spsoID: string;
        description: string;
    }[];
    maintenanceHistory: {
        date: Date;
        spsoID: string;
        description: string;
    }[];
}
export declare const PrinterSchema: import("mongoose").Schema<Printer, import("mongoose").Model<Printer, any, any, any, Document<unknown, any, Printer> & Printer & Required<{
    _id: unknown;
}> & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Printer, Document<unknown, {}, import("mongoose").FlatRecord<Printer>> & import("mongoose").FlatRecord<Printer> & Required<{
    _id: unknown;
}> & {
    __v?: number;
}>;

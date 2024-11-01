import { Document } from "mongoose";
export declare class SPSO extends Document {
    fullname: string;
    username: string;
    password: string;
    spso_id: string;
    email: string;
    managedPrinters: string[];
    managedLocation: string;
}
export declare const SPSOSchema: import("mongoose").Schema<SPSO, import("mongoose").Model<SPSO, any, any, any, Document<unknown, any, SPSO> & SPSO & Required<{
    _id: unknown;
}> & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SPSO, Document<unknown, {}, import("mongoose").FlatRecord<SPSO>> & import("mongoose").FlatRecord<SPSO> & Required<{
    _id: unknown;
}> & {
    __v?: number;
}>;

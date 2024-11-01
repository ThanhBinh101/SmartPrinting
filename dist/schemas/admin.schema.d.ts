import { Document } from "mongoose";
export declare class Admin extends Document {
    fullname: string;
    username: string;
    password: string;
    admin_id: string;
    email: string;
}
export declare const AdminSchema: import("mongoose").Schema<Admin, import("mongoose").Model<Admin, any, any, any, Document<unknown, any, Admin> & Admin & Required<{
    _id: unknown;
}> & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Admin, Document<unknown, {}, import("mongoose").FlatRecord<Admin>> & import("mongoose").FlatRecord<Admin> & Required<{
    _id: unknown;
}> & {
    __v?: number;
}>;

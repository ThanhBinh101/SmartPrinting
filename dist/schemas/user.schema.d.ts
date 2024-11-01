import { Document } from "mongoose";
export declare class Student extends Document {
    fullname: string;
    username: string;
    password: string;
    stud_id: string;
    email: string;
    faculty: string;
    printHistory: {
        date: Date;
        printerID: string;
        pages: number;
    }[];
    paymentHistory: {
        date: Date;
        amount: number;
    }[];
}
export declare const StudentSchema: import("mongoose").Schema<Student, import("mongoose").Model<Student, any, any, any, Document<unknown, any, Student> & Student & Required<{
    _id: unknown;
}> & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Student, Document<unknown, {}, import("mongoose").FlatRecord<Student>> & import("mongoose").FlatRecord<Student> & Required<{
    _id: unknown;
}> & {
    __v?: number;
}>;

export declare class student {
    fullname: string;
    username: string;
    password: string;
    stud_id: string;
    email: string;
    faculty: string;
    age: number;
    address: string;
}
export declare const userSchema: import("mongoose").Schema<student, import("mongoose").Model<student, any, any, any, import("mongoose").Document<unknown, any, student> & student & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, student, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<student>> & import("mongoose").FlatRecord<student> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}>;

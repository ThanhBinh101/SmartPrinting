import { Report } from './report.schema';
export declare class StudentReport extends Report {
    studentID: string;
}
export declare const StudentReportSchema: import("mongoose").Schema<StudentReport, import("mongoose").Model<StudentReport, any, any, any, import("mongoose").Document<unknown, any, StudentReport> & StudentReport & Required<{
    _id: unknown;
}> & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, StudentReport, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<StudentReport>> & import("mongoose").FlatRecord<StudentReport> & Required<{
    _id: unknown;
}> & {
    __v?: number;
}>;

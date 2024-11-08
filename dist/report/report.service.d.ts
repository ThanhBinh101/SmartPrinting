import { Model } from 'mongoose';
import { PrinterReport } from 'src/schemas/printer-report.schema';
import { StudentReport } from 'src/schemas/student-report.shema';
import { reportDTO } from './dtos/report.dto';
import { Report } from 'src/schemas/report.schema';
export declare class ReportService {
    private readonly reportModel;
    private readonly studentReportModel;
    private readonly printerReportModel;
    constructor(reportModel: Model<Report>, studentReportModel: Model<StudentReport>, printerReportModel: Model<PrinterReport>);
    createReportForStudent(studentID: string, reportData: Partial<reportDTO>): Promise<StudentReport>;
    createReportForPrinter(printerID: string, reportData: Partial<reportDTO>): Promise<PrinterReport>;
    requestMaintain(SPSO_ID: string): Promise<PrinterReport>;
    requestPaperChange(SPSO_ID: string): Promise<PrinterReport>;
    viewReportPrinter(page: number, limit: number): Promise<(import("mongoose").Document<unknown, {}, PrinterReport> & PrinterReport & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[]>;
    viewReportPrinterByDate(page: number, limit: number, startDate: Date, endDate: Date): Promise<(import("mongoose").Document<unknown, {}, PrinterReport> & PrinterReport & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[]>;
    viewReportStudent(page: number, limit: number): Promise<(import("mongoose").Document<unknown, {}, StudentReport> & StudentReport & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[]>;
    viewReportStudentByDate(page: number, limit: number, startDate: Date, endDate: Date): Promise<(import("mongoose").Document<unknown, {}, StudentReport> & StudentReport & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[]>;
    private validateDates;
}

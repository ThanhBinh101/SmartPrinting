import { ReportService } from './report.service';
import { reportDTO } from './dtos/report.dto';
export declare class ReportController {
    private readonly reportService;
    constructor(reportService: ReportService);
    createStudentReport(reportData: Partial<reportDTO>, studentID: string): Promise<import("../schemas/student-report.shema").StudentReport>;
    createPrinterReport(reportData: Partial<reportDTO>, printerID: string): Promise<import("../schemas/printer-report.schema").PrinterReport>;
    viewReportPrinter(page: number, limit: number): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/printer-report.schema").PrinterReport> & import("../schemas/printer-report.schema").PrinterReport & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[]>;
    viewReportPrinterByDate(page: number, limit: number, startDate: Date, endDate: Date): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/printer-report.schema").PrinterReport> & import("../schemas/printer-report.schema").PrinterReport & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[]>;
    viewReportStudent(page: number, limit: number): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/student-report.shema").StudentReport> & import("../schemas/student-report.shema").StudentReport & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[]>;
    viewReportStudentByDate(page: number, limit: number, startDate: Date, endDate: Date): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/student-report.shema").StudentReport> & import("../schemas/student-report.shema").StudentReport & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[]>;
}

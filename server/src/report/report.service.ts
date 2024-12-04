import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PrinterReport } from 'src/schemas/printer-report.schema';
import { StudentReport } from 'src/schemas/student-report.shema';
import { reportDTO } from './dtos/report.dto';
import { Report } from 'src/schemas/report.schema';
@Injectable()
export class ReportService {
    constructor(
        @InjectModel(Report.name) private readonly reportModel: Model<Report>,
        @InjectModel(StudentReport.name) private readonly studentReportModel: Model<StudentReport>,
        @InjectModel(PrinterReport.name) private readonly printerReportModel: Model<PrinterReport>,
    ) {}

    async createReportForStudent(studentID: string, reportData: Partial<reportDTO>): Promise<StudentReport> {
        if (!studentID) throw new BadRequestException('Student ID is required');
        const report = new this.studentReportModel({ ...reportData, studentID });
        return report.save();
    }

    async createReportForPrinter(printerID: string, reportData: Partial<reportDTO>): Promise<PrinterReport> {
        if (!printerID) throw new BadRequestException('Printer ID is required');
        const report = new this.printerReportModel({ ...reportData, printerID });
        return report.save();
    }

    async requestMaintain(SPSO_ID: string): Promise<PrinterReport> {
        if (!SPSO_ID) throw new BadRequestException('SPSO_ID is required');
        const report = new this.printerReportModel({
            reportType: 'MaintenanceRequest',
            content: 'Maintenance requested',
            printerID: SPSO_ID,
            date: new Date(),
        });
        return report.save();
    }

    async requestPaperChange(SPSO_ID: string): Promise<PrinterReport> {
        if (!SPSO_ID) throw new BadRequestException('SPSO_ID is required');
        const report = new this.printerReportModel({
            reportType: 'PaperChangeRequest',
            content: 'Paper change requested',
            printerID: SPSO_ID,
            date: new Date(),
        });
        return report.save();
    }

    async viewReportPrinter(page: number, limit: number) {
        const skip = (page - 1) * limit;
        return this.printerReportModel.find().skip(skip).limit(limit).exec();
    }

    async viewReportPrinterByDate(page: number, limit: number, startDate: Date, endDate: Date) {
        this.validateDates(startDate, endDate);
        const skip = (page - 1) * limit;
        return this.printerReportModel
            .find({ date: { $gte: startDate, $lte: endDate } })
            .skip(skip)
            .limit(limit)
            .exec();
    }

    async viewReportStudent(page: number, limit: number) {
        const skip = (page - 1) * limit;
        return this.studentReportModel.find().skip(skip).limit(limit).exec();
    }

    async viewReportStudentByDate(page: number, limit: number, startDate: Date, endDate: Date) {
        this.validateDates(startDate, endDate);
        const skip = (page - 1) * limit;
        return this.studentReportModel
            .find({ date: { $gte: startDate, $lte: endDate } })
            .skip(skip)
            .limit(limit)
            .exec();
    }

    private validateDates(startDate: Date, endDate: Date) {
        if (startDate > endDate) {
            throw new BadRequestException('Start date must be before end date');
        }
    }
}


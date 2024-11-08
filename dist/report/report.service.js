"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const printer_report_schema_1 = require("../schemas/printer-report.schema");
const student_report_shema_1 = require("../schemas/student-report.shema");
const report_schema_1 = require("../schemas/report.schema");
let ReportService = class ReportService {
    constructor(reportModel, studentReportModel, printerReportModel) {
        this.reportModel = reportModel;
        this.studentReportModel = studentReportModel;
        this.printerReportModel = printerReportModel;
    }
    async createReportForStudent(studentID, reportData) {
        if (!studentID)
            throw new common_1.BadRequestException('Student ID is required');
        const report = new this.studentReportModel({ ...reportData, studentID });
        return report.save();
    }
    async createReportForPrinter(printerID, reportData) {
        if (!printerID)
            throw new common_1.BadRequestException('Printer ID is required');
        const report = new this.printerReportModel({ ...reportData, printerID });
        return report.save();
    }
    async requestMaintain(SPSO_ID) {
        if (!SPSO_ID)
            throw new common_1.BadRequestException('SPSO_ID is required');
        const report = new this.printerReportModel({
            reportType: 'MaintenanceRequest',
            content: 'Maintenance requested',
            printerID: SPSO_ID,
            date: new Date(),
        });
        return report.save();
    }
    async requestPaperChange(SPSO_ID) {
        if (!SPSO_ID)
            throw new common_1.BadRequestException('SPSO_ID is required');
        const report = new this.printerReportModel({
            reportType: 'PaperChangeRequest',
            content: 'Paper change requested',
            printerID: SPSO_ID,
            date: new Date(),
        });
        return report.save();
    }
    async viewReportPrinter(page, limit) {
        const skip = (page - 1) * limit;
        return this.printerReportModel.find().skip(skip).limit(limit).exec();
    }
    async viewReportPrinterByDate(page, limit, startDate, endDate) {
        this.validateDates(startDate, endDate);
        const skip = (page - 1) * limit;
        return this.printerReportModel
            .find({ date: { $gte: startDate, $lte: endDate } })
            .skip(skip)
            .limit(limit)
            .exec();
    }
    async viewReportStudent(page, limit) {
        const skip = (page - 1) * limit;
        return this.studentReportModel.find().skip(skip).limit(limit).exec();
    }
    async viewReportStudentByDate(page, limit, startDate, endDate) {
        this.validateDates(startDate, endDate);
        const skip = (page - 1) * limit;
        return this.studentReportModel
            .find({ date: { $gte: startDate, $lte: endDate } })
            .skip(skip)
            .limit(limit)
            .exec();
    }
    validateDates(startDate, endDate) {
        if (startDate > endDate) {
            throw new common_1.BadRequestException('Start date must be before end date');
        }
    }
};
exports.ReportService = ReportService;
exports.ReportService = ReportService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(report_schema_1.Report.name)),
    __param(1, (0, mongoose_1.InjectModel)(student_report_shema_1.StudentReport.name)),
    __param(2, (0, mongoose_1.InjectModel)(printer_report_schema_1.PrinterReport.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], ReportService);
//# sourceMappingURL=report.service.js.map
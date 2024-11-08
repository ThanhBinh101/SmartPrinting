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
exports.ReportController = void 0;
const common_1 = require("@nestjs/common");
const report_service_1 = require("./report.service");
let ReportController = class ReportController {
    constructor(reportService) {
        this.reportService = reportService;
    }
    async createStudentReport(reportData, studentID) {
        return this.reportService.createReportForStudent(studentID, reportData);
    }
    async createPrinterReport(reportData, printerID) {
        return this.reportService.createReportForPrinter(printerID, reportData);
    }
    async viewReportPrinter(page, limit) {
        return this.reportService.viewReportPrinter(page, limit);
    }
    async viewReportPrinterByDate(page, limit, startDate, endDate) {
        return this.reportService.viewReportPrinterByDate(page, limit, startDate, endDate);
    }
    async viewReportStudent(page, limit) {
        return this.reportService.viewReportStudent(page, limit);
    }
    async viewReportStudentByDate(page, limit, startDate, endDate) {
        return this.reportService.viewReportStudentByDate(page, limit, startDate, endDate);
    }
};
exports.ReportController = ReportController;
__decorate([
    (0, common_1.Post)('student'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('studentID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ReportController.prototype, "createStudentReport", null);
__decorate([
    (0, common_1.Post)('printer'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('printerID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ReportController.prototype, "createPrinterReport", null);
__decorate([
    (0, common_1.Get)('printer'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ReportController.prototype, "viewReportPrinter", null);
__decorate([
    (0, common_1.Get)('printer/by-date'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('startDate')),
    __param(3, (0, common_1.Query)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Date,
        Date]),
    __metadata("design:returntype", Promise)
], ReportController.prototype, "viewReportPrinterByDate", null);
__decorate([
    (0, common_1.Get)('student'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ReportController.prototype, "viewReportStudent", null);
__decorate([
    (0, common_1.Get)('student/by-date'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('startDate')),
    __param(3, (0, common_1.Query)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Date,
        Date]),
    __metadata("design:returntype", Promise)
], ReportController.prototype, "viewReportStudentByDate", null);
exports.ReportController = ReportController = __decorate([
    (0, common_1.Controller)('report'),
    __metadata("design:paramtypes", [report_service_1.ReportService])
], ReportController);
//# sourceMappingURL=report.controller.js.map
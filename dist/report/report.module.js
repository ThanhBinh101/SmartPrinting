"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportModule = void 0;
const common_1 = require("@nestjs/common");
const report_controller_1 = require("./report.controller");
const report_service_1 = require("./report.service");
const mongoose_1 = require("@nestjs/mongoose");
const report_schema_1 = require("../schemas/report.schema");
const student_report_shema_1 = require("../schemas/student-report.shema");
const printer_report_schema_1 = require("../schemas/printer-report.schema");
let ReportModule = class ReportModule {
};
exports.ReportModule = ReportModule;
exports.ReportModule = ReportModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: report_schema_1.Report.name, schema: report_schema_1.ReportSchema },
                { name: student_report_shema_1.StudentReport.name, schema: student_report_shema_1.StudentReportSchema },
                { name: printer_report_schema_1.PrinterReport.name, schema: printer_report_schema_1.PrinterReportSchema },
            ])
        ],
        controllers: [report_controller_1.ReportController],
        providers: [report_service_1.ReportService]
    })
], ReportModule);
//# sourceMappingURL=report.module.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentReportSchema = exports.StudentReport = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const report_schema_1 = require("./report.schema");
let StudentReport = class StudentReport extends report_schema_1.Report {
};
exports.StudentReport = StudentReport;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], StudentReport.prototype, "studentID", void 0);
exports.StudentReport = StudentReport = __decorate([
    (0, mongoose_1.Schema)()
], StudentReport);
exports.StudentReportSchema = mongoose_1.SchemaFactory.createForClass(StudentReport);
//# sourceMappingURL=student-report.shema.js.map
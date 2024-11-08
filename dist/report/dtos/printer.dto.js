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
exports.PrinterDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class PrintHistoryItemDTO {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PrintHistoryItemDTO.prototype, "studentID", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], PrintHistoryItemDTO.prototype, "date", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PrintHistoryItemDTO.prototype, "pages", void 0);
class PaperChangeHistoryItemDTO {
}
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], PaperChangeHistoryItemDTO.prototype, "date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PaperChangeHistoryItemDTO.prototype, "spsoID", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PaperChangeHistoryItemDTO.prototype, "description", void 0);
class MaintenanceHistoryItemDTO {
}
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], MaintenanceHistoryItemDTO.prototype, "date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MaintenanceHistoryItemDTO.prototype, "spsoID", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MaintenanceHistoryItemDTO.prototype, "description", void 0);
class PrinterDTO {
}
exports.PrinterDTO = PrinterDTO;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PrinterDTO.prototype, "printerID", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => PrintHistoryItemDTO),
    __metadata("design:type", Array)
], PrinterDTO.prototype, "printHistory", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => PaperChangeHistoryItemDTO),
    __metadata("design:type", Array)
], PrinterDTO.prototype, "paperChangeHistory", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => MaintenanceHistoryItemDTO),
    __metadata("design:type", Array)
], PrinterDTO.prototype, "maintenanceHistory", void 0);
//# sourceMappingURL=printer.dto.js.map
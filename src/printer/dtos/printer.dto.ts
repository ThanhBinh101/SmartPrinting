import { IsString, IsDate, IsArray, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class PrintHistoryItemDTO {
    @IsString()
    studentID: string;

    @IsDate()
    @Type(() => Date)
    date: Date;

    @IsNumber()
    pages: number;
}

class PaperChangeHistoryItemDTO {
    @IsDate()
    @Type(() => Date)
    date: Date;

    @IsString()
    spsoID: string;

    @IsString()
    description: string;
}

class MaintenanceHistoryItemDTO {
    @IsDate()
    @Type(() => Date)
    date: Date;

    @IsString()
    spsoID: string;

    @IsString()
    description: string;
}

export class PrinterDTO {
    @IsString()
    printerID: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PrintHistoryItemDTO)
    printHistory: PrintHistoryItemDTO[];

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PaperChangeHistoryItemDTO)
    paperChangeHistory: PaperChangeHistoryItemDTO[];

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => MaintenanceHistoryItemDTO)
    maintenanceHistory: MaintenanceHistoryItemDTO[];
}

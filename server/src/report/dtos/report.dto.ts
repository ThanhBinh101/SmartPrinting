import { IsNotEmpty, IsString, IsOptional, IsDate } from 'class-validator';

export class reportDTO {
    @IsNotEmpty()
    @IsString()
    reportType: string; 

    @IsNotEmpty()
    @IsDate()
    date: Date;

    @IsNotEmpty()
    @IsString()
    content: string;

    @IsOptional()
    @IsString()
    studentID?: string;

    @IsOptional()
    @IsString()
    printerID?: string;
}

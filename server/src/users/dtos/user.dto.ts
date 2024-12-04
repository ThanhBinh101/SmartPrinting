import { IsNotEmpty, IsNumber, IsString, IsArray, ValidateNested, IsDate } from "class-validator";
import { Type } from "class-transformer";

class PrintHistoryDTO {
    @IsNotEmpty()
    @IsString()
    printerID: string;

    @IsNotEmpty()
    @IsDate()
    date: Date;

    @IsNotEmpty()
    @IsNumber()
    pages: number;
}

class PaymentHistoryDTO {
    @IsNotEmpty()
    @IsDate()
    date: Date;

    @IsNotEmpty()
    @IsNumber()
    amount: number;
}

export class StudentDTO {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    stud_id: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    fullname: string;

    @IsNotEmpty()
    @IsString()
    faculty: string;
    
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PrintHistoryDTO)
    printHistory: PrintHistoryDTO[];

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PaymentHistoryDTO)
    paymentHistory: PaymentHistoryDTO[];
}

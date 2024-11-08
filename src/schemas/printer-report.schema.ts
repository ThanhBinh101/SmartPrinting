import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Report } from './report.schema';

@Schema()
export class PrinterReport extends Report {
    @Prop()
    printerID: string; 
}

export const PrinterReportSchema = SchemaFactory.createForClass(PrinterReport);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Report } from './report.schema';

@Schema()
export class StudentReport extends Report {
    @Prop()
    studentID: string; 
}

export const StudentReportSchema = SchemaFactory.createForClass(StudentReport);

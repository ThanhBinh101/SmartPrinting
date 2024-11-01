import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Report extends Document {
    @Prop()
    reportType: string; 

    @Prop()
    date: Date;

    @Prop()
    content: string;

    @Prop()
    studentID?: string; 

    @Prop()
    printerID?: string; 
}

export const ReportSchema = SchemaFactory.createForClass(Report);

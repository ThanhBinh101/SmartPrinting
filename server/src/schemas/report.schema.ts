import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ discriminatorKey: 'reportType' })
export class Report extends Document {
    @Prop({ required: true })
    reportType: string; 
    @Prop()
    date: Date;

    @Prop()
    content: string;
}

export const ReportSchema = SchemaFactory.createForClass(Report);

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Printer extends Document {
    @Prop()
    printerID: string;

    @Prop([{ studentID: String, date: Date, pages: Number }])
    printHistory: { studentID: string; date: Date; pages: number }[];

    @Prop([{ date: Date, spsoID: String, description: String }])
    paperChangeHistory: { date: Date; spsoID: string; description: string }[];

    @Prop([{ date: Date, spsoID: String, description: String }])
    maintenanceHistory: { date: Date; spsoID: string; description: string }[];
}

export const PrinterSchema = SchemaFactory.createForClass(Printer);

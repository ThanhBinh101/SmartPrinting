import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Student extends Document {
    @Prop()
    fullname: string;
    
    @Prop()
    username: string;
    
    @Prop()
    password: string;

    @Prop()
    stud_id: string;
    
    @Prop()
    email: string;

    @Prop()
    faculty: string;

    @Prop([{ date: Date, printerID: String, pages: Number }])
    printHistory: { date: Date; printerID: string; pages: number }[];

    @Prop([{ date: Date, amount: Number }])
    paymentHistory: { date: Date; amount: number }[];
}

export const StudentSchema = SchemaFactory.createForClass(Student);

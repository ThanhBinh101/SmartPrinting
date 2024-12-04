import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class SPSO extends Document {
    @Prop()
    fullname: string;

    @Prop()
    username: string;
    
    @Prop()
    password: string;

    @Prop()
    spso_id: string;

    @Prop()
    email: string;

    @Prop([String])
    managedPrinters: string[];  

    @Prop()
    managedLocation: string;
}

export const SPSOSchema = SchemaFactory.createForClass(SPSO);

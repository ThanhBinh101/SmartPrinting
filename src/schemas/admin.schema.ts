import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Admin extends Document {
    @Prop()
    fullname: string;

    @Prop()
    username: string;
    
    @Prop()
    password: string;

    @Prop()
    admin_id: string;

    @Prop()
    email: string;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);

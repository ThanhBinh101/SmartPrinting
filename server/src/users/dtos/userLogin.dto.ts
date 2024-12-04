import { IsNotEmpty, IsNumber, IsString, isString } from "class-validator";

export class userloginDTO{
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    email: string;
}

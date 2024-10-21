import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { student } from 'src/schemas/user.schema'; // Assuming 'Author' is your schema
import { userDTO } from './dtos/user.dto'; // Correct casing
import { userloginDTO } from './dtos/userLogin.dto';
import { promises } from 'dns';
import * as bcrypt from 'bcrypt';
import { exec } from 'child_process';


@Injectable()
export class UsersService {
    constructor(@InjectModel(student.name) private authorModel: Model<student>) {}

    async createUser(user: userDTO): Promise<student> {
        const User = new this.authorModel(user);
        const salt = await bcrypt.genSalt(15);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        console.log(hashedPassword);
        const newUser = await this.authorModel.create({
            fullname: user.fullname,
            username: user.username,
            password: hashedPassword,
            stud_id: user.stud_id,
            email: user.email,
            faculty: user.faculty,
            age: user.age,
            address: user.address,
        });
        console.log(newUser); // Logs the user object
        await newUser.save(); // Saves the new user to MongoDB
        return newUser;
    }
    async login(userlogin: userloginDTO) {
        const User = await this.authorModel.findOne({email: userlogin.email}).exec();
        if(!User){
            throw new NotFoundException('User not found');
        }
        const match = await bcrypt.compare(userlogin.password, User.password);
        // console.log(hashedpass);
        if (!match) {
            throw new NotFoundException('password is not correct');
        }
        return User;
    }
}

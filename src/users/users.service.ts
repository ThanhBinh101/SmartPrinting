import { Injectable, NotFoundException, UnauthorizedException, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { student } from 'src/schemas/user.schema'; // Assuming 'Author' is your schema
import { userDTO } from './dtos/user.dto'; // Correct casing
import { userloginDTO } from './dtos/userLogin.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(@InjectModel(Student.name) private readonly studentModel: Model<Student>) {}

    async createUser(user: StudentDTO): Promise<Student> {
        const existingUser = await this.studentModel.findOne({ email: user.email }).exec();
        if (existingUser) {
            throw new ConflictException('User with this email already exists');
        }

        const saltRounds = 15;
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);

        const newUser = new this.studentModel({
            ...user,
            password: hashedPassword,
        });
        console.log(newUser); // Logs the user object
        await newUser.save(); // Saves the new user to MongoDB
        return newUser;
    }

    async login(userLogin: userloginDTO): Promise<{ message: string; user: Student }> {
        const user = await this.studentModel.findOne({ email: userLogin.email }).exec();

        if (!user) {
            throw new NotFoundException('User not found');
        }

        const passwordMatches = await bcrypt.compare(userLogin.password, user.password);
        if (!passwordMatches) {
            throw new UnauthorizedException('Incorrect password');
        }

        return {
            message: 'Login successful',
            user,
        };
    }
    async getUser(userID: string): Promise<Student>{
        const currentUser = await this.studentModel.findById(userID);
        return currentUser;
    }
    async getStudentID(userID: string) {
        const currentUser = await this.studentModel.findById(userID);
        const stuID = currentUser.stud_id;
        console.log(stuID);
        return stuID;
    }
}

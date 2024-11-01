import { Model } from 'mongoose';
import { Student } from 'src/schemas/user.schema';
import { StudentDTO } from './dtos/user.dto';
import { userloginDTO } from './dtos/userLogin.dto';
export declare class UsersService {
    private readonly studentModel;
    constructor(studentModel: Model<Student>);
    createUser(user: StudentDTO): Promise<Student>;
    login(userLogin: userloginDTO): Promise<{
        message: string;
        user: Student;
    }>;
    getUser(userID: string): Promise<Student>;
    getStudentID(userID: string): Promise<string>;
}

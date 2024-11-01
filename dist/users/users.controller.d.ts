import { StudentDTO } from './dtos/user.dto';
import { UsersService } from './users.service';
import { userloginDTO } from './dtos/userLogin.dto';
import { Student } from 'src/schemas/user.schema';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    createUser(user: StudentDTO): Promise<Student>;
    login(userLogin: userloginDTO): Promise<{
        message: string;
        user: Student;
    }>;
    getUser(id: string): Promise<import("mongoose").Document<unknown, {}, Student> & Student & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    getStudentID(id: string): Promise<string>;
}

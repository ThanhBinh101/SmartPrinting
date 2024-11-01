import { StudentDTO } from './dtos/user.dto';
import { UsersService } from './users.service';
import { userloginDTO } from './dtos/userLogin.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    createUser(user: StudentDTO): Promise<import("../schemas/user.schema").Student>;
    login(userLogin: userloginDTO): Promise<{
        message: string;
        user: import("../schemas/user.schema").Student;
    }>;
    getUser(userID: string): Promise<import("../schemas/user.schema").Student>;
    getStudentID(userID: string): Promise<string>;
}

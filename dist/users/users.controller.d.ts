import { userDTO } from './dtos/user.dto';
import { UsersService } from './users.service';
import { userloginDTO } from './dtos/userLogin.dto';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    createUser(user: userDTO): Promise<import("../schemas/user.schema").student>;
    login(userLogin: userloginDTO): Promise<import("mongoose").Document<unknown, {}, import("../schemas/user.schema").student> & import("../schemas/user.schema").student & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
}

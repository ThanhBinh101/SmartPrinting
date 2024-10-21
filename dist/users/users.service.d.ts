import { Model } from 'mongoose';
import { student } from 'src/schemas/user.schema';
import { userDTO } from './dtos/user.dto';
import { userloginDTO } from './dtos/userLogin.dto';
export declare class UsersService {
    private authorModel;
    constructor(authorModel: Model<student>);
    createUser(user: userDTO): Promise<student>;
    login(userlogin: userloginDTO): Promise<import("mongoose").Document<unknown, {}, student> & student & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
}

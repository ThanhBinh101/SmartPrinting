import { Body, Controller, Post } from '@nestjs/common';
import { userDTO } from './dtos/user.dto';
import { UsersService } from './users.service';
import { userloginDTO } from './dtos/userLogin.dto';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}
    @Post('/register')
    async createUser(@Body() user: userDTO){
        console.log(user.email);
        console.log(user.password);
        return this.userService.createUser(user);
    }
    @Post('login')
    async login(@Body() userLogin: userloginDTO){
        console.log(userLogin);
        return await this.userService.login(userLogin);
    };
}

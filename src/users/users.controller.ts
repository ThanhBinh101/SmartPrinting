import { Body, Controller, Post,Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { StudentDTO } from './dtos/user.dto';
import { UsersService } from './users.service';
import { userloginDTO } from './dtos/userLogin.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Student } from 'src/schemas/user.schema';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Post('/register')
    async createUser(@Body() user: StudentDTO) {
        try {
            return this.userService.createUser(user);
        } catch (error) {
            console.error('Error creating user:', error.message);
            throw new HttpException('Failed to register user', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Post('/login')
    async login(@Body() userLogin: userloginDTO) {
        try {
            const token = await this.userService.login(userLogin);
            if (!token) {
                throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
            }
            return token;
        } catch (error) {
            console.error('Error logging in user:', error.message);
            throw new HttpException('Login failed', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Get('/getUser/:id')
    async getUser(
        @Param('id') id: string
    ) {
        return this.userService.getUser(id);
    }
    @Get('/getStudentID/:id')
    async getStudentID(
        @Param('id') id: string
    ){
        return this.userService.getStudentID(id);
    }
}

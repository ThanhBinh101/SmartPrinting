import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { student, userSchema } from 'src/schemas/user.schema';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
    imports: [
      MongooseModule.forFeature([{ name: student.name, schema: userSchema }]),
    ],
    providers: [UsersService],
    controllers: [UsersController],
  })
export class UsersModule {}

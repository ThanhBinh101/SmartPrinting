import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema, Student } from 'src/schemas/user.schema';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
    imports: [
      MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
    ],
    providers: [UsersService],
    controllers: [UsersController],
  })
export class UsersModule {}

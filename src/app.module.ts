import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ReportModule } from './report/report.module';
import { PrinterModule } from './printer/printer.module';
import mongoose from 'mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://tuanemtramtinh:TuanAnh_0908@truntrun.ddns.net:27017/cnpm', {
    authSource: "admin",
        user:"tuanemtramtinh",
        pass:"TuanAnh_0908"
  }), UsersModule, ReportModule, PrinterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  async onModuleInit() {
    try {
      await mongoose.connect('mongodb://tuanemtramtinh:TuanAnh_0908@truntrun.ddns.net:27017/cnpm',{
        authSource: "admin",
        user:"tuanemtramtinh",
        pass:"TuanAnh_0908"
      });
      console.log('Connected to MongoDB successfully');
    } catch (error) {
      console.error('MongoDB connection error:', error);
    }
  }
}

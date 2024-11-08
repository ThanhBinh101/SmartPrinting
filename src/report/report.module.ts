import { Module } from '@nestjs/common';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Report, ReportSchema } from 'src/schemas/report.schema';
import { StudentReport, StudentReportSchema } from 'src/schemas/student-report.shema';
import { PrinterReport, PrinterReportSchema } from 'src/schemas/printer-report.schema';

@Module({
  imports: [
      MongooseModule.forFeature([
        {name: Report.name, schema: ReportSchema},
        {name: StudentReport.name, schema: StudentReportSchema },
        {name: PrinterReport. name, schema: PrinterReportSchema},
      ])
  ],
  controllers: [ReportController],
  providers: [ReportService]
})
export class ReportModule {}

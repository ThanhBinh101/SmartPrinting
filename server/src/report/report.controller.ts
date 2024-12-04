// reports.controller.ts
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ReportService } from './report.service';
import { reportDTO } from './dtos/report.dto';

@Controller('report')
export class ReportController {
    constructor(private readonly reportService: ReportService) {}

    @Post('student')
    async createStudentReport(@Body() reportData: Partial<reportDTO>, @Query('studentID') studentID: string) {
        return this.reportService.createReportForStudent(studentID, reportData);
    }

    @Post('printer')
    async createPrinterReport(@Body() reportData: Partial<reportDTO>, @Query('printerID') printerID: string) {
        return this.reportService.createReportForPrinter(printerID, reportData);
    }

    // @Post('maintenance')
    // async requestMaintain(@Query('SPSO_ID') SPSO_ID: string) {
    //     return this.reportService.requestMaintain(SPSO_ID);
    // }

    // @Post('paper-change')
    // async requestPaperChange(@Query('SPSO_ID') SPSO_ID: string) {
    //     return this.reportService.requestPaperChange(SPSO_ID);
    // }

    @Get('printer')
    async viewReportPrinter(@Query('page') page: number, @Query('limit') limit: number) {
        return this.reportService.viewReportPrinter(page, limit);
    }

    @Get('printer/by-date')
    async viewReportPrinterByDate(
        @Query('page') page: number,
        @Query('limit') limit: number,
        @Query('startDate') startDate: Date,
        @Query('endDate') endDate: Date,
    ) {
        return this.reportService.viewReportPrinterByDate(page, limit, startDate, endDate);
    }

    @Get('student')
    async viewReportStudent(@Query('page') page: number, @Query('limit') limit: number) {
        return this.reportService.viewReportStudent(page, limit);
    }

    @Get('student/by-date')
    async viewReportStudentByDate(
        @Query('page') page: number,
        @Query('limit') limit: number,
        @Query('startDate') startDate: Date,
        @Query('endDate') endDate: Date,
    ) {
        return this.reportService.viewReportStudentByDate(page, limit, startDate, endDate);
    }
}

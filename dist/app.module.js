"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const users_module_1 = require("./users/users.module");
const report_module_1 = require("./report/report.module");
const mongoose_2 = require("mongoose");
let AppModule = class AppModule {
    async onModuleInit() {
        try {
            await mongoose_2.default.connect('mongodb://tuanemtramtinh:TuanAnh_0908@truntrun.ddns.net:27017/cnpm', {
                authSource: "admin",
                user: "tuanemtramtinh",
                pass: "TuanAnh_0908"
            });
            console.log('Connected to MongoDB successfully');
        }
        catch (error) {
            console.error('MongoDB connection error:', error);
        }
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forRoot('mongodb://tuanemtramtinh:TuanAnh_0908@truntrun.ddns.net:27017/cnpm', {
                authSource: "admin",
                user: "tuanemtramtinh",
                pass: "TuanAnh_0908"
            }), users_module_1.UsersModule, report_module_1.ReportModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
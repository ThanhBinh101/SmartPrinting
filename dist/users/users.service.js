"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../schemas/user.schema");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(studentModel) {
        this.studentModel = studentModel;
    }
    async createUser(user) {
        const existingUser = await this.studentModel.findOne({ email: user.email }).exec();
        if (existingUser) {
            throw new common_1.ConflictException('User with this email already exists');
        }
        const saltRounds = 15;
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);
        const newUser = new this.studentModel({
            ...user,
            password: hashedPassword,
        });
        return newUser.save();
    }
    async login(userLogin) {
        const user = await this.studentModel.findOne({ email: userLogin.email }).exec();
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const passwordMatches = await bcrypt.compare(userLogin.password, user.password);
        if (!passwordMatches) {
            throw new common_1.UnauthorizedException('Incorrect password');
        }
        return {
            message: 'Login successful',
            user,
        };
    }
    async getUser(userID) {
        const currentUser = await this.studentModel.findById(userID);
        return currentUser;
    }
    async getStudentID(userID) {
        const currentUser = await this.studentModel.findById(userID);
        const stuID = currentUser.stud_id;
        console.log(stuID);
        return stuID;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.Student.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
//# sourceMappingURL=users.service.js.map
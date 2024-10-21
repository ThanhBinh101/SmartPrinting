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
    constructor(authorModel) {
        this.authorModel = authorModel;
    }
    async createUser(user) {
        const User = new this.authorModel(user);
        const salt = await bcrypt.genSalt(15);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        console.log(hashedPassword);
        const newUser = await this.authorModel.create({
            fullname: user.fullname,
            username: user.username,
            password: hashedPassword,
            stud_id: user.stud_id,
            email: user.email,
            faculty: user.faculty,
            age: user.age,
            address: user.address,
        });
        console.log(newUser);
        await newUser.save();
        return newUser;
    }
    async login(userlogin) {
        const User = await this.authorModel.findOne({ email: userlogin.email }).exec();
        if (!User) {
            throw new common_1.NotFoundException('User not found');
        }
        const match = await bcrypt.compare(userlogin.password, User.password);
        if (!match) {
            throw new common_1.NotFoundException('password is not correct');
        }
        return User;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.student.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
//# sourceMappingURL=users.service.js.map
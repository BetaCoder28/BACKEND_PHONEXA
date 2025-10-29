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
exports.UsersController = void 0;
const users_service_1 = require("./users.service");
const common_1 = require("@nestjs/common");
const register_dto_1 = require("./dto/register.dto");
const public_decorator_1 = require("../../middlewares/auth/public.decorator");
const cookie_auth_decorator_1 = require("../../middlewares/auth/cookie-auth.decorator");
const swagger_1 = require("@nestjs/swagger");
let UsersController = class UsersController {
    usersService;
    constructor(usersService) {
        this.usersService = usersService;
    }
    async register(registerDto) {
        try {
            console.log('=== REGISTRO DE USUARIO - CONTROLADOR ===');
            console.log('📥 Datos recibidos en el controlador:');
            console.log('👤 Datos del usuario:', {
                name: registerDto.name,
                email: registerDto.email,
                isPremiumUser: registerDto.isPremiumUser ?? 'false',
                password: '[PROTEGIDA]',
            });
            const result = await this.usersService.createUserDB(registerDto);
            console.log('✅ Registro completado exitosamente en el controlador');
            return {
                success: true,
                data: result,
            };
        }
        catch (error) {
            console.error('❌ Error en el controlador de registro:', error.message);
            throw new common_1.HttpException({
                success: false,
                message: error.message || 'Error al registrar el usuario',
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll() {
        try {
            const users = await this.usersService.findAllUsers();
            return {
                success: true,
                data: users,
            };
        }
        catch (error) {
            throw new common_1.HttpException({
                success: false,
                message: error.message || 'Error al obtener los usuarios',
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getUserById(idUser) {
        try {
            const result = await this.usersService.getUserById(idUser);
            return result;
        }
        catch (error) {
            throw new common_1.HttpException({
                success: false,
                message: error.message || 'Error interno del servidor',
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Registrar un nuevo usuario' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.RegisterDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "register", null);
__decorate([
    (0, common_1.Get)(),
    (0, public_decorator_1.Public)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Obtener la lista de todos los usuarios',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, cookie_auth_decorator_1.ApiCookieAuth)(),
    (0, common_1.Get)(':idUser'),
    (0, public_decorator_1.Public)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener usuario por ID (requiere autenticación)' }),
    __param(0, (0, common_1.Param)('idUser', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserById", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiTags)('Usuarios'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map
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
exports.LoginController = void 0;
const common_1 = require("@nestjs/common");
const login_dto_1 = require("./dto/login.dto");
const login_service_1 = require("./login.service");
const swagger_1 = require("@nestjs/swagger");
const public_decorator_1 = require("../../middlewares/auth/public.decorator");
const cookie_auth_decorator_1 = require("../../middlewares/auth/cookie-auth.decorator");
let LoginController = class LoginController {
    loginService;
    constructor(loginService) {
        this.loginService = loginService;
    }
    async verifyLogin(loginDto, res) {
        try {
            const result = await this.loginService.verifyLogin(loginDto, res);
            return result;
        }
        catch (error) {
            if (error.status === 401) {
                throw error;
            }
            throw new common_1.HttpException({
                success: false,
                message: error.message || 'Error interno del servidor',
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async logout(res) {
        try {
            const result = await this.loginService.logout(res);
            return result;
        }
        catch (error) {
            throw new common_1.HttpException({
                success: false,
                message: error.message || 'Error interno del servidor',
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.LoginController = LoginController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('/login'),
    (0, swagger_1.ApiOperation)({ summary: 'Iniciar sesión de usuario' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Login exitoso',
        schema: {
            example: {
                success: true,
                message: 'Login exitoso',
                data: {
                    access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
                }
            }
        }
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Credenciales inválidas',
        schema: {
            example: {
                success: false,
                message: 'Credenciales inválidas. Verifica tu email y contraseña.'
            }
        }
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto, Object]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "verifyLogin", null);
__decorate([
    (0, cookie_auth_decorator_1.ApiCookieAuth)(),
    (0, common_1.Post)('logout'),
    (0, swagger_1.ApiOperation)({ summary: 'Cerrar sesión de usuario' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Logout exitoso',
        schema: {
            example: {
                success: true,
                message: 'Logout exitoso'
            }
        }
    }),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "logout", null);
exports.LoginController = LoginController = __decorate([
    (0, swagger_1.ApiTags)('Autenticación'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [login_service_1.LoginService])
], LoginController);
//# sourceMappingURL=login.controller.js.map
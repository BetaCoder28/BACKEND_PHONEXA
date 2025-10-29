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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../../middlewares/auth/auth.service");
let LoginService = class LoginService {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    async verifyLogin(data, res) {
        try {
            const user = await this.authService.validateUser(data);
            if (!user) {
                throw new common_1.UnauthorizedException({
                    success: false,
                    message: 'Credenciales inválidas. Verifica tu email y contraseña.',
                });
            }
            return await this.authService.login(user, res);
        }
        catch (error) {
            if (error instanceof common_1.UnauthorizedException) {
                throw error;
            }
            console.error('Error capturado en LoginService (AuthService):', error.message);
            throw new common_1.UnauthorizedException({
                success: false,
                message: 'Error interno del servidor durante el login',
            });
        }
    }
    async logout(res) {
        try {
            return await this.authService.logout(res);
        }
        catch (error) {
            throw new common_1.UnauthorizedException({
                success: false,
                message: 'Error interno del servidor durante el logout',
            });
        }
    }
};
exports.LoginService = LoginService;
exports.LoginService = LoginService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], LoginService);
//# sourceMappingURL=login.service.js.map
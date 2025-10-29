"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../config/prisma/prisma.service");
const bcrypt = __importStar(require("bcrypt"));
let UsersService = class UsersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createUserDB(data) {
        console.log('=== PROCESAMIENTO BASE DE DATOS ===');
        console.log('🔍 Verificando si el usuario ya existe...');
        try {
            const existingUser = await this.prisma.user.findUnique({
                where: { email: data.email },
            });
            if (existingUser) {
                console.error('❌ Usuario con este email ya existe:', existingUser.email);
                throw new Error('El usuario con este email ya existe');
            }
            console.log('✅ Usuario no existe, puede proceder con el registro');
            console.log('🔐 Encriptando contraseña...');
            const hashedPassword = await bcrypt.hash(data.password, 10);
            console.log('✅ Contraseña encriptada correctamente');
            console.log('💾 Creando usuario en base de datos...');
            const newUser = await this.prisma.user.create({
                data: {
                    name: data.name,
                    email: data.email,
                    password: hashedPassword,
                    isPremiumUser: data.isPremiumUser ?? 'false',
                },
            });
            console.log('🎉 REGISTRO COMPLETADO EXITOSAMENTE');
            console.log('📊 Resultado BD:', {
                message: 'Usuario creado correctamente',
                idUser: newUser.idUser,
                isPremiumUser: newUser.isPremiumUser,
            });
            console.log('===============================');
            return {
                message: 'Usuario creado correctamente',
                idUser: newUser.idUser,
            };
        }
        catch (error) {
            console.error('💥 ERROR EN PROCESAMIENTO BD:', error.message);
            console.error('🚫 PROCESAMIENTO BD FALLIDO');
            console.log('===============================');
            throw new Error(`Error al crear usuario en BD: ${error.message}`);
        }
    }
    async getUserById(idUser) {
        try {
            const foundUser = await this.prisma.user.findUnique({
                where: { idUser: idUser },
                select: {
                    idUser: true,
                    name: true,
                    email: true,
                    isPremiumUser: true,
                },
            });
            if (foundUser) {
                return {
                    success: true,
                    data: foundUser,
                };
            }
            return {
                success: false,
                message: 'Usuario no encontrado',
            };
        }
        catch (error) {
            throw new Error(`Error al buscar usuario: ${error.message}`);
        }
    }
    async findAllUsers() {
        try {
            const users = await this.prisma.user.findMany({
                select: {
                    idUser: true,
                    name: true,
                    email: true,
                    isPremiumUser: true,
                },
            });
            return users;
        }
        catch (error) {
            console.error('Error al obtener todos los usuarios:', error.message);
            throw new Error(`Error al obtener usuarios: ${error.message}`);
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map
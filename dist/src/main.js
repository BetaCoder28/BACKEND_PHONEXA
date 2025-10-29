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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const bodyParser = __importStar(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const exception_filter_1 = require("./exception.filter");
const jwt_auth_guard_1 = require("./middlewares/auth/jwt-auth.guard");
const core_2 = require("@nestjs/core");
const express = __importStar(require("express"));
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((0, cookie_parser_1.default)());
    app.use('/public', express.static((0, path_1.resolve)(process.cwd(), 'public')));
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const reflector = app.get(core_2.Reflector);
    app.useGlobalGuards(new jwt_auth_guard_1.JwtAuthGuard(reflector));
    app.use('/webhook', bodyParser.raw({ type: 'application/json' }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API - Ecommerce (Vistella)')
        .setDescription('API que incluye las funcionalidades para el ecommerce de Vistella. La autenticación se maneja mediante cookies HTTP-only.')
        .setVersion('1.0')
        .addBearerAuth()
        .addSecurity('cookieAuth', {
        type: 'http',
        scheme: 'cookie',
        description: 'Autenticación mediante cookie HTTP-only. El token JWT se envía automáticamente en las cookies cuando el usuario está logueado.',
    })
        .build();
    const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, documentFactory, {
        swaggerOptions: {
            withCredentials: true,
        },
    });
    app.useGlobalFilters(new exception_filter_1.PrismaClientExceptionFilter());
    app.enableCors({
        origin: ['http://localhost:3000'],
        credentials: true,
    });
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map
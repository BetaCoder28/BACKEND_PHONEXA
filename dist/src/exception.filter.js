"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaClientExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const library_1 = require("@prisma/client/runtime/library");
let PrismaClientExceptionFilter = class PrismaClientExceptionFilter {
    commonErrorMap = new Map([
        [
            'P2001',
            {
                status: 404,
                message: 'El elemento que buscas no existe',
                error: 'Not Found',
            },
        ],
        [
            'P2002',
            {
                status: 409,
                message: 'Ya existe un registro con esos datos',
                error: 'Conflict',
            },
        ],
        [
            'P2003',
            {
                status: 400,
                message: 'No se puede realizar la operación porque falta información relacionada',
                error: 'Bad Request',
            },
        ],
        [
            'P2011',
            {
                status: 400,
                message: 'Falta información obligatoria',
                error: 'Bad Request',
            },
        ],
        [
            'P2025',
            {
                status: 404,
                message: 'No se encontró el elemento necesario para completar la operación',
                error: 'Not Found',
            },
        ],
        [
            'P1001',
            {
                status: 503,
                message: 'No se puede conectar al servicio. Intenta de nuevo en unos momentos',
                error: 'Service Unavailable',
            },
        ],
        [
            'P1002',
            {
                status: 408,
                message: 'La operación está tardando demasiado. Intenta de nuevo',
                error: 'Request Timeout',
            },
        ],
        [
            'P5011',
            {
                status: 429,
                message: 'Has realizado demasiadas operaciones. Espera un momento e intenta de nuevo',
                error: 'Too Many Requests',
            },
        ],
    ]);
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        if (exception instanceof common_1.HttpException) {
            return response
                .status(exception.getStatus())
                .json(exception.getResponse());
        }
        if (exception instanceof library_1.PrismaClientKnownRequestError) {
            const commonError = this.commonErrorMap.get(exception.code);
            if (commonError) {
                return response.status(commonError.status).json({
                    statusCode: commonError.status,
                    message: this.enhanceErrorMessage(commonError.message, exception),
                    error: commonError.error,
                    code: exception.code,
                });
            }
            return response.status(400).json({
                statusCode: 400,
                message: 'Ocurrió un problema al procesar tu solicitud. Verifica los datos e intenta de nuevo',
                error: 'Database Error',
                code: exception.code,
                ...(process.env.NODE_ENV === 'development' && {
                    details: exception.meta,
                    originalMessage: exception.message,
                    cause: exception.cause,
                }),
            });
        }
        return response.status(500).json({
            statusCode: 500,
            message: 'Algo salió mal en nuestro servidor. Estamos trabajando para solucionarlo. Por favor, intenta de nuevo en unos minutos',
            error: 'Internal Server Error',
            ...(process.env.NODE_ENV === 'development' && {
                debugInfo: {
                    errorType: exception?.constructor?.name || 'Unknown',
                    errorMessage: exception?.message || 'No message available',
                    stack: exception?.stack,
                    nodeEnv: process.env.NODE_ENV,
                },
            }),
        });
    }
    enhanceErrorMessage(baseMessage, exception) {
        switch (exception.code) {
            case 'P2002':
                const field = exception.meta?.target;
                if (field) {
                    return `${baseMessage}. El campo "${field}" ya está en uso`;
                }
                return `${baseMessage}. Verifica que la información no esté duplicada`;
            case 'P2003':
                const fieldName = exception.meta?.field_name;
                if (fieldName) {
                    return `${baseMessage}. Verifica el campo "${fieldName}"`;
                }
                return `${baseMessage}. Verifica que todos los datos relacionados existan`;
            default:
                return baseMessage;
        }
    }
};
exports.PrismaClientExceptionFilter = PrismaClientExceptionFilter;
exports.PrismaClientExceptionFilter = PrismaClientExceptionFilter = __decorate([
    (0, common_1.Catch)()
], PrismaClientExceptionFilter);
//# sourceMappingURL=exception.filter.js.map
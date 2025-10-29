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
exports.AeronauticalAlphabetController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const aeronautical_alphabet_service_1 = require("./aeronautical-alphabet.service");
const create_aeronautical_alphabet_card_dto_1 = require("./dto/create-aeronautical-alphabet-card.dto");
const update_aeronautical_alphabet_card_dto_1 = require("./dto/update-aeronautical-alphabet-card.dto");
const quiz_answer_dto_1 = require("./dto/quiz-answer.dto");
const swagger_1 = require("@nestjs/swagger");
let AeronauticalAlphabetController = class AeronauticalAlphabetController {
    aeronauticalAlphabetService;
    constructor(aeronauticalAlphabetService) {
        this.aeronauticalAlphabetService = aeronauticalAlphabetService;
    }
    async create(createDto, imageFile, audioFile) {
        try {
            const result = await this.aeronauticalAlphabetService.createWithFiles(createDto, imageFile, audioFile);
            return result;
        }
        catch (error) {
            throw new common_1.HttpException({
                success: false,
                message: error.message || 'Error al crear la tarjeta',
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll() {
        try {
            const result = await this.aeronauticalAlphabetService.findAll();
            return result;
        }
        catch (error) {
            throw new common_1.HttpException({
                success: false,
                message: error.message || 'Error al obtener las tarjetas',
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findOne(id) {
        try {
            const result = await this.aeronauticalAlphabetService.findOne(id);
            if (!result.success) {
                throw new common_1.HttpException(result.message || 'Tarjeta no encontrada', common_1.HttpStatus.NOT_FOUND);
            }
            return result;
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.HttpException({
                success: false,
                message: error.message || 'Error interno del servidor',
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(id, updateDto) {
        try {
            const result = await this.aeronauticalAlphabetService.update(id, updateDto);
            return result;
        }
        catch (error) {
            throw new common_1.HttpException({
                success: false,
                message: error.message || 'Error al actualizar la tarjeta',
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async remove(id) {
        try {
            const result = await this.aeronauticalAlphabetService.remove(id);
            return result;
        }
        catch (error) {
            throw new common_1.HttpException({
                success: false,
                message: error.message || 'Error al eliminar la tarjeta',
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getRandomQuiz() {
        try {
            const result = await this.aeronauticalAlphabetService.getRandomQuiz();
            if (!result.success) {
                throw new common_1.HttpException(result.message || 'No hay tarjetas disponibles', common_1.HttpStatus.NOT_FOUND);
            }
            return result;
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.HttpException({
                success: false,
                message: error.message || 'Error interno del servidor',
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async checkQuizAnswer(id, quizAnswerDto) {
        try {
            const result = await this.aeronauticalAlphabetService.checkQuizAnswer(id, quizAnswerDto.answer);
            if (!result.success) {
                throw new common_1.HttpException(result.message || 'Tarjeta no encontrada', common_1.HttpStatus.NOT_FOUND);
            }
            return result;
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.HttpException({
                success: false,
                message: error.message || 'Error interno del servidor',
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.AeronauticalAlphabetController = AeronauticalAlphabetController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image'), (0, platform_express_1.FileInterceptor)('audio')),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiOperation)({
        summary: 'Crear una nueva tarjeta del alfabeto aeronáutico con archivos multimedia',
        description: 'Requiere autenticación. Permite subir imagen y audio opcionalmente.',
    }),
    (0, swagger_1.ApiBody)({
        description: 'Datos de la tarjeta con archivos opcionales',
        schema: {
            type: 'object',
            properties: {
                text: { type: 'string', example: 'Alpha' },
                pronunciation: { type: 'string', example: 'Al-fa' },
                image: {
                    type: 'string',
                    format: 'binary',
                    description: 'Archivo de imagen (opcional)',
                },
                audio: {
                    type: 'string',
                    format: 'binary',
                    description: 'Archivo de audio (opcional)',
                },
            },
        },
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)('image')),
    __param(2, (0, common_1.UploadedFile)('audio')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_aeronautical_alphabet_card_dto_1.CreateAeronauticalAlphabetCardDto, Object, Object]),
    __metadata("design:returntype", Promise)
], AeronauticalAlphabetController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Obtener todas las tarjetas del alfabeto aeronáutico',
        description: 'Requiere autenticación.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AeronauticalAlphabetController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Obtener una tarjeta por ID',
        description: 'Requiere autenticación.',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AeronauticalAlphabetController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Actualizar una tarjeta por ID',
        description: 'Requiere autenticación.',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_aeronautical_alphabet_card_dto_1.UpdateAeronauticalAlphabetCardDto]),
    __metadata("design:returntype", Promise)
], AeronauticalAlphabetController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Eliminar una tarjeta por ID',
        description: 'Requiere autenticación.',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AeronauticalAlphabetController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('quiz/random'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Obtener una pregunta de quiz aleatoria',
        description: 'Requiere autenticación.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AeronauticalAlphabetController.prototype, "getRandomQuiz", null);
__decorate([
    (0, common_1.Post)('quiz/:id/check'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Verificar respuesta del quiz',
        description: 'Requiere autenticación.',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, quiz_answer_dto_1.QuizAnswerDto]),
    __metadata("design:returntype", Promise)
], AeronauticalAlphabetController.prototype, "checkQuizAnswer", null);
exports.AeronauticalAlphabetController = AeronauticalAlphabetController = __decorate([
    (0, swagger_1.ApiTags)('Alfabeto Aeronáutico'),
    (0, common_1.Controller)('aeronautical-alphabet'),
    __metadata("design:paramtypes", [aeronautical_alphabet_service_1.AeronauticalAlphabetService])
], AeronauticalAlphabetController);
//# sourceMappingURL=aeronautical-alphabet.controller.js.map
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
exports.AeronauticalAlphabetService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../config/prisma/prisma.service");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
let AeronauticalAlphabetService = class AeronauticalAlphabetService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createDto) {
        try {
            const card = await this.prisma.aeronauticalAlphabetCard.create({
                data: createDto,
            });
            return {
                success: true,
                data: card,
                message: 'Tarjeta creada correctamente',
            };
        }
        catch (error) {
            throw new Error(`Error al crear tarjeta: ${error.message}`);
        }
    }
    async findAll() {
        try {
            const cards = await this.prisma.aeronauticalAlphabetCard.findMany({
                orderBy: { id: 'asc' },
            });
            return {
                success: true,
                data: cards,
            };
        }
        catch (error) {
            throw new Error(`Error al obtener tarjetas: ${error.message}`);
        }
    }
    async findOne(id) {
        try {
            const card = await this.prisma.aeronauticalAlphabetCard.findUnique({
                where: { id },
            });
            if (card) {
                return {
                    success: true,
                    data: card,
                };
            }
            return {
                success: false,
                message: 'Tarjeta no encontrada',
            };
        }
        catch (error) {
            throw new Error(`Error al buscar tarjeta: ${error.message}`);
        }
    }
    async update(id, updateDto) {
        try {
            const card = await this.prisma.aeronauticalAlphabetCard.update({
                where: { id },
                data: updateDto,
            });
            return {
                success: true,
                data: card,
                message: 'Tarjeta actualizada correctamente',
            };
        }
        catch (error) {
            throw new Error(`Error al actualizar tarjeta: ${error.message}`);
        }
    }
    async remove(id) {
        try {
            await this.prisma.aeronauticalAlphabetCard.delete({
                where: { id },
            });
            return {
                success: true,
                message: 'Tarjeta eliminada correctamente',
            };
        }
        catch (error) {
            throw new Error(`Error al eliminar tarjeta: ${error.message}`);
        }
    }
    async getRandomQuiz() {
        try {
            const cards = await this.prisma.aeronauticalAlphabetCard.findMany();
            if (cards.length === 0) {
                return {
                    success: false,
                    message: 'No hay tarjetas disponibles para el quiz',
                };
            }
            const randomIndex = Math.floor(Math.random() * cards.length);
            const selectedCard = cards[randomIndex];
            const correctAnswer = selectedCard.text;
            const allTexts = cards.map((card) => card.text);
            const incorrectOptions = allTexts.filter((text) => text !== correctAnswer);
            const shuffledIncorrect = incorrectOptions.sort(() => 0.5 - Math.random());
            const options = [correctAnswer, ...shuffledIncorrect.slice(0, 3)].sort(() => 0.5 - Math.random());
            return {
                success: true,
                data: {
                    id: selectedCard.id,
                    question: `¿Cuál es la palabra del alfabeto aeronáutico que se pronuncia como "${selectedCard.pronunciation || selectedCard.text}"?`,
                    imageUrl: selectedCard.imageUrl,
                    options: options,
                    correctAnswer: correctAnswer,
                },
            };
        }
        catch (error) {
            throw new Error(`Error al generar quiz: ${error.message}`);
        }
    }
    async checkQuizAnswer(cardId, userAnswer) {
        try {
            const card = await this.prisma.aeronauticalAlphabetCard.findUnique({
                where: { id: cardId },
            });
            if (!card) {
                return {
                    success: false,
                    message: 'Tarjeta no encontrada',
                };
            }
            const isCorrect = card.text.toLowerCase() === userAnswer.toLowerCase();
            return {
                success: true,
                data: {
                    isCorrect: isCorrect,
                    correctAnswer: card.text,
                    userAnswer: userAnswer,
                    message: isCorrect ? '¡Correcto!' : 'Incorrecto, intenta de nuevo',
                },
            };
        }
        catch (error) {
            throw new Error(`Error al verificar respuesta: ${error.message}`);
        }
    }
    async createWithFiles(createDto, imageFile, audioFile) {
        try {
            let imageUrl;
            let audioUrl;
            const publicDir = path.join(__dirname, '..', '..', 'public');
            const iconsDir = path.join(publicDir, 'icons');
            const audiosDir = path.join(publicDir, 'audios');
            if (!fs.existsSync(iconsDir)) {
                fs.mkdirSync(iconsDir, { recursive: true });
            }
            if (!fs.existsSync(audiosDir)) {
                fs.mkdirSync(audiosDir, { recursive: true });
            }
            if (imageFile) {
                const imageFileName = `${Date.now()}-image-${imageFile.originalname}`;
                const imageFilePath = path.join(iconsDir, imageFileName);
                fs.writeFileSync(imageFilePath, imageFile.buffer);
                const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
                imageUrl = `${baseUrl}/icons/${imageFileName}`;
            }
            if (audioFile) {
                const audioFileName = `${Date.now()}-audio-${audioFile.originalname}`;
                const audioFilePath = path.join(audiosDir, audioFileName);
                fs.writeFileSync(audioFilePath, audioFile.buffer);
                const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
                audioUrl = `${baseUrl}/audios/${audioFileName}`;
            }
            const cardData = {
                ...createDto,
                imageUrl: imageUrl || createDto.imageUrl,
                audioUrl: audioUrl || createDto.audioUrl,
            };
            const card = await this.prisma.aeronauticalAlphabetCard.create({
                data: cardData,
            });
            return {
                success: true,
                data: card,
                message: 'Tarjeta creada correctamente',
            };
        }
        catch (error) {
            throw new Error(`Error al crear tarjeta con archivos: ${error.message}`);
        }
    }
};
exports.AeronauticalAlphabetService = AeronauticalAlphabetService;
exports.AeronauticalAlphabetService = AeronauticalAlphabetService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AeronauticalAlphabetService);
//# sourceMappingURL=aeronautical-alphabet.service.js.map
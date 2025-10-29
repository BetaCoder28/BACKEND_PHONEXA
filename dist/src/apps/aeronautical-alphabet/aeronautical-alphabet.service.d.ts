import { PrismaService } from 'src/config/prisma/prisma.service';
import { CreateAeronauticalAlphabetCardDto } from './dto/create-aeronautical-alphabet-card.dto';
import { UpdateAeronauticalAlphabetCardDto } from './dto/update-aeronautical-alphabet-card.dto';
export declare class AeronauticalAlphabetService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDto: CreateAeronauticalAlphabetCardDto): Promise<{
        success: boolean;
        data: {
            id: number;
            text: string;
            imageUrl: string | null;
            audioUrl: string | null;
            pronunciation: string | null;
        };
        message: string;
    }>;
    findAll(): Promise<{
        success: boolean;
        data: {
            id: number;
            text: string;
            imageUrl: string | null;
            audioUrl: string | null;
            pronunciation: string | null;
        }[];
    }>;
    findOne(id: number): Promise<{
        success: boolean;
        data: {
            id: number;
            text: string;
            imageUrl: string | null;
            audioUrl: string | null;
            pronunciation: string | null;
        };
        message?: undefined;
    } | {
        success: boolean;
        message: string;
        data?: undefined;
    }>;
    update(id: number, updateDto: UpdateAeronauticalAlphabetCardDto): Promise<{
        success: boolean;
        data: {
            id: number;
            text: string;
            imageUrl: string | null;
            audioUrl: string | null;
            pronunciation: string | null;
        };
        message: string;
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
    getRandomQuiz(): Promise<{
        success: boolean;
        message: string;
        data?: undefined;
    } | {
        success: boolean;
        data: {
            id: number;
            question: string;
            imageUrl: string | null;
            options: string[];
            correctAnswer: string;
        };
        message?: undefined;
    }>;
    checkQuizAnswer(cardId: number, userAnswer: string): Promise<{
        success: boolean;
        message: string;
        data?: undefined;
    } | {
        success: boolean;
        data: {
            isCorrect: boolean;
            correctAnswer: string;
            userAnswer: string;
            message: string;
        };
        message?: undefined;
    }>;
    createWithFiles(createDto: CreateAeronauticalAlphabetCardDto, imageFile?: any, audioFile?: any): Promise<{
        success: boolean;
        data: {
            id: number;
            text: string;
            imageUrl: string | null;
            audioUrl: string | null;
            pronunciation: string | null;
        };
        message: string;
    }>;
}

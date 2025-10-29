import { AeronauticalAlphabetService } from './aeronautical-alphabet.service';
import { CreateAeronauticalAlphabetCardDto } from './dto/create-aeronautical-alphabet-card.dto';
import { UpdateAeronauticalAlphabetCardDto } from './dto/update-aeronautical-alphabet-card.dto';
import { QuizAnswerDto } from './dto/quiz-answer.dto';
export declare class AeronauticalAlphabetController {
    private readonly aeronauticalAlphabetService;
    constructor(aeronauticalAlphabetService: AeronauticalAlphabetService);
    create(createDto: CreateAeronauticalAlphabetCardDto, imageFile?: any, audioFile?: any): Promise<{
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
    checkQuizAnswer(id: number, quizAnswerDto: QuizAnswerDto): Promise<{
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
}

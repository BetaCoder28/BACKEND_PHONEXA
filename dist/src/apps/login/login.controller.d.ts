import { LoginDto } from './dto/login.dto';
import { LoginService } from './login.service';
import type { Response } from 'express';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    verifyLogin(loginDto: LoginDto, res: Response): Promise<{
        success: boolean;
        message: string;
        access_token: string;
    }>;
    logout(res: Response): Promise<{
        success: boolean;
        message: string;
    }>;
}

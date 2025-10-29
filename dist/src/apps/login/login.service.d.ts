import { LoginDto } from './dto/login.dto';
import { AuthService } from 'src/middlewares/auth/auth.service';
import type { Response } from 'express';
export declare class LoginService {
    private authService;
    constructor(authService: AuthService);
    verifyLogin(data: LoginDto, res?: Response): Promise<{
        success: boolean;
        message: string;
        access_token: string;
    }>;
    logout(res: Response): Promise<{
        success: boolean;
        message: string;
    }>;
}

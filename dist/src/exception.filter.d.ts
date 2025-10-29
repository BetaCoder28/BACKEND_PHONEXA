import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';
export declare class PrismaClientExceptionFilter implements ExceptionFilter {
    private readonly commonErrorMap;
    catch(exception: any, host: ArgumentsHost): Response<any, Record<string, any>>;
    private enhanceErrorMessage;
}

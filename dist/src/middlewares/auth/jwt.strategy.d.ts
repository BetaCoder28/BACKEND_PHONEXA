import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/config/prisma/prisma.service';
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    private prismaService;
    constructor(configService: ConfigService, prismaService: PrismaService);
    validate(payload: any): Promise<{
        idUser: number;
        name: string;
        email: string;
        isPremiumUser: string | null;
    }>;
}
export {};

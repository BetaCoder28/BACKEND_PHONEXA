"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiCookieAuth = ApiCookieAuth;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
function ApiCookieAuth() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiSecurity)('cookieAuth'));
}
//# sourceMappingURL=cookie-auth.decorator.js.map
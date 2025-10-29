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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAeronauticalAlphabetCardDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateAeronauticalAlphabetCardDto {
    text;
    imageUrl;
    audioUrl;
    pronunciation;
}
exports.CreateAeronauticalAlphabetCardDto = CreateAeronauticalAlphabetCardDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(255),
    (0, swagger_1.ApiProperty)({
        example: 'Alpha',
        description: 'Palabra del alfabeto aeronáutico',
    }),
    __metadata("design:type", String)
], CreateAeronauticalAlphabetCardDto.prototype, "text", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(2048),
    (0, swagger_1.ApiProperty)({
        example: 'https://example.com/image.jpg',
        description: 'URL de la imagen',
        required: false,
    }),
    __metadata("design:type", String)
], CreateAeronauticalAlphabetCardDto.prototype, "imageUrl", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(2048),
    (0, swagger_1.ApiProperty)({
        example: 'https://example.com/audio.mp3',
        description: 'URL del audio',
        required: false,
    }),
    __metadata("design:type", String)
], CreateAeronauticalAlphabetCardDto.prototype, "audioUrl", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(255),
    (0, swagger_1.ApiProperty)({
        example: 'Al-fa',
        description: 'Manera de pronunciarlo',
        required: false,
    }),
    __metadata("design:type", String)
], CreateAeronauticalAlphabetCardDto.prototype, "pronunciation", void 0);
//# sourceMappingURL=create-aeronautical-alphabet-card.dto.js.map
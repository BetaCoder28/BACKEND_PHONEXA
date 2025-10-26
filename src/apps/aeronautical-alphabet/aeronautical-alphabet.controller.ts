import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  ParseIntPipe,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { AeronauticalAlphabetService } from './aeronautical-alphabet.service';
import { CreateAeronauticalAlphabetCardDto } from './dto/create-aeronautical-alphabet-card.dto';
import { UpdateAeronauticalAlphabetCardDto } from './dto/update-aeronautical-alphabet-card.dto';
import { QuizAnswerDto } from './dto/quiz-answer.dto';
import {
  ApiTags,
  ApiOperation,
  ApiConsumes,
  ApiBody,
  ApiBearerAuth,
} from '@nestjs/swagger';

@ApiTags('Alfabeto Aeronáutico')
@Controller('aeronautical-alphabet')
export class AeronauticalAlphabetController {
  constructor(
    private readonly aeronauticalAlphabetService: AeronauticalAlphabetService,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'), FileInterceptor('audio'))
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @ApiOperation({
    summary:
      'Crear una nueva tarjeta del alfabeto aeronáutico con archivos multimedia',
    description:
      'Requiere autenticación. Permite subir imagen y audio opcionalmente.',
  })
  @ApiBody({
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
  })
  async create(
    @Body() createDto: CreateAeronauticalAlphabetCardDto,
    @UploadedFile('image') imageFile?: any,
    @UploadedFile('audio') audioFile?: any,
  ) {
    try {
      const result = await this.aeronauticalAlphabetService.createWithFiles(
        createDto,
        imageFile,
        audioFile,
      );
      return result;
    } catch (error) {
      throw new HttpException(
        {
          success: false,
          message: error.message || 'Error al crear la tarjeta',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get()
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Obtener todas las tarjetas del alfabeto aeronáutico',
    description: 'Requiere autenticación.',
  })
  async findAll() {
    try {
      const result = await this.aeronauticalAlphabetService.findAll();
      return result;
    } catch (error) {
      throw new HttpException(
        {
          success: false,
          message: error.message || 'Error al obtener las tarjetas',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Obtener una tarjeta por ID',
    description: 'Requiere autenticación.',
  })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    try {
      const result = await this.aeronauticalAlphabetService.findOne(id);
      if (!result.success) {
        throw new HttpException(
          result.message || 'Tarjeta no encontrada',
          HttpStatus.NOT_FOUND,
        );
      }
      return result;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        {
          success: false,
          message: error.message || 'Error interno del servidor',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Actualizar una tarjeta por ID',
    description: 'Requiere autenticación.',
  })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateAeronauticalAlphabetCardDto,
  ) {
    try {
      const result = await this.aeronauticalAlphabetService.update(
        id,
        updateDto,
      );
      return result;
    } catch (error) {
      throw new HttpException(
        {
          success: false,
          message: error.message || 'Error al actualizar la tarjeta',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Eliminar una tarjeta por ID',
    description: 'Requiere autenticación.',
  })
  async remove(@Param('id', ParseIntPipe) id: number) {
    try {
      const result = await this.aeronauticalAlphabetService.remove(id);
      return result;
    } catch (error) {
      throw new HttpException(
        {
          success: false,
          message: error.message || 'Error al eliminar la tarjeta',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get('quiz/random')
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Obtener una pregunta de quiz aleatoria',
    description: 'Requiere autenticación.',
  })
  async getRandomQuiz() {
    try {
      const result = await this.aeronauticalAlphabetService.getRandomQuiz();
      if (!result.success) {
        throw new HttpException(
          result.message || 'No hay tarjetas disponibles',
          HttpStatus.NOT_FOUND,
        );
      }
      return result;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        {
          success: false,
          message: error.message || 'Error interno del servidor',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Post('quiz/:id/check')
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Verificar respuesta del quiz',
    description: 'Requiere autenticación.',
  })
  async checkQuizAnswer(
    @Param('id', ParseIntPipe) id: number,
    @Body() quizAnswerDto: QuizAnswerDto,
  ) {
    try {
      const result = await this.aeronauticalAlphabetService.checkQuizAnswer(
        id,
        quizAnswerDto.answer,
      );
      if (!result.success) {
        throw new HttpException(
          result.message || 'Tarjeta no encontrada',
          HttpStatus.NOT_FOUND,
        );
      }
      return result;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        {
          success: false,
          message: error.message || 'Error interno del servidor',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}

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
} from '@nestjs/common';
import { AeronauticalAlphabetService } from './aeronautical-alphabet.service';
import { CreateAeronauticalAlphabetCardDto } from './dto/create-aeronautical-alphabet-card.dto';
import { UpdateAeronauticalAlphabetCardDto } from './dto/update-aeronautical-alphabet-card.dto';
import { QuizAnswerDto } from './dto/quiz-answer.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Public } from 'src/middlewares/auth/public.decorator';

@ApiTags('Alfabeto Aeronáutico')
@Controller('aeronautical-alphabet')
export class AeronauticalAlphabetController {
  constructor(
    private readonly aeronauticalAlphabetService: AeronauticalAlphabetService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva tarjeta del alfabeto aeronáutico' })
  async create(@Body() createDto: CreateAeronauticalAlphabetCardDto) {
    try {
      const result = await this.aeronauticalAlphabetService.create(createDto);
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
  @Public()
  @ApiOperation({
    summary: 'Obtener todas las tarjetas del alfabeto aeronáutico',
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
  @Public()
  @ApiOperation({ summary: 'Obtener una tarjeta por ID' })
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
  @ApiOperation({ summary: 'Actualizar una tarjeta por ID' })
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
  @ApiOperation({ summary: 'Eliminar una tarjeta por ID' })
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
  @Public()
  @ApiOperation({ summary: 'Obtener una pregunta de quiz aleatoria' })
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
  @ApiOperation({ summary: 'Verificar respuesta del quiz' })
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

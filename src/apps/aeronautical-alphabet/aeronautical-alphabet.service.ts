import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { CreateAeronauticalAlphabetCardDto } from './dto/create-aeronautical-alphabet-card.dto';
import { UpdateAeronauticalAlphabetCardDto } from './dto/update-aeronautical-alphabet-card.dto';

@Injectable()
export class AeronauticalAlphabetService {
  constructor(private prisma: PrismaService) {}

  async create(createDto: CreateAeronauticalAlphabetCardDto) {
    try {
      const card = await this.prisma.aeronauticalAlphabetCard.create({
        data: createDto,
      });
      return {
        success: true,
        data: card,
        message: 'Tarjeta creada correctamente',
      };
    } catch (error) {
      throw new Error(`Error al crear tarjeta: ${error.message}`);
    }
  }

  async findAll() {
    try {
      const cards = await this.prisma.aeronauticalAlphabetCard.findMany({
        orderBy: { id: 'asc' },
      });
      return {
        success: true,
        data: cards,
      };
    } catch (error) {
      throw new Error(`Error al obtener tarjetas: ${error.message}`);
    }
  }

  async findOne(id: number) {
    try {
      const card = await this.prisma.aeronauticalAlphabetCard.findUnique({
        where: { id },
      });

      if (card) {
        return {
          success: true,
          data: card,
        };
      }

      return {
        success: false,
        message: 'Tarjeta no encontrada',
      };
    } catch (error) {
      throw new Error(`Error al buscar tarjeta: ${error.message}`);
    }
  }

  async update(id: number, updateDto: UpdateAeronauticalAlphabetCardDto) {
    try {
      const card = await this.prisma.aeronauticalAlphabetCard.update({
        where: { id },
        data: updateDto,
      });
      return {
        success: true,
        data: card,
        message: 'Tarjeta actualizada correctamente',
      };
    } catch (error) {
      throw new Error(`Error al actualizar tarjeta: ${error.message}`);
    }
  }

  async remove(id: number) {
    try {
      await this.prisma.aeronauticalAlphabetCard.delete({
        where: { id },
      });
      return {
        success: true,
        message: 'Tarjeta eliminada correctamente',
      };
    } catch (error) {
      throw new Error(`Error al eliminar tarjeta: ${error.message}`);
    }
  }

  async getRandomQuiz() {
    try {
      // Obtener todas las tarjetas
      const cards = await this.prisma.aeronauticalAlphabetCard.findMany();

      if (cards.length === 0) {
        return {
          success: false,
          message: 'No hay tarjetas disponibles para el quiz',
        };
      }

      // Seleccionar una tarjeta aleatoria
      const randomIndex = Math.floor(Math.random() * cards.length);
      const selectedCard = cards[randomIndex];

      // Generar opciones (la correcta + 3 incorrectas)
      const correctAnswer = selectedCard.text;
      const allTexts = cards.map(card => card.text);
      const incorrectOptions = allTexts.filter(text => text !== correctAnswer);

      // Mezclar las opciones incorrectas y tomar 3
      const shuffledIncorrect = incorrectOptions.sort(() => 0.5 - Math.random());
      const options = [correctAnswer, ...shuffledIncorrect.slice(0, 3)].sort(() => 0.5 - Math.random());

      return {
        success: true,
        data: {
          id: selectedCard.id,
          question: `¿Cuál es la palabra del alfabeto aeronáutico que se pronuncia como "${selectedCard.pronunciation || selectedCard.text}"?`,
          imageUrl: selectedCard.imageUrl,
          options: options,
          correctAnswer: correctAnswer,
        },
      };
    } catch (error) {
      throw new Error(`Error al generar quiz: ${error.message}`);
    }
  }

  async checkQuizAnswer(cardId: number, userAnswer: string) {
    try {
      const card = await this.prisma.aeronauticalAlphabetCard.findUnique({
        where: { id: cardId },
      });

      if (!card) {
        return {
          success: false,
          message: 'Tarjeta no encontrada',
        };
      }

      const isCorrect = card.text.toLowerCase() === userAnswer.toLowerCase();

      return {
        success: true,
        data: {
          isCorrect: isCorrect,
          correctAnswer: card.text,
          userAnswer: userAnswer,
          message: isCorrect ? '¡Correcto!' : 'Incorrecto, intenta de nuevo',
        },
      };
    } catch (error) {
      throw new Error(`Error al verificar respuesta: ${error.message}`);
    }
  }
}
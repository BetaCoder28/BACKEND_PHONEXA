import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed de datos...');

  // Limpiar datos existentes
  console.log('🧹 Limpiando datos existentes...');
  await prisma.quizz.deleteMany();
  await prisma.aeronauticalAlphabetCard.deleteMany();
  console.log(' Datos limpiados');

  // Seed de tarjetas del alfabeto aeronáutico
  const aeronauticalAlphabetCards = [
    {
      text: 'Alpha',
      pronunciation: 'Al-fa',
      imageUrl: 'http://localhost:3000/icons/alpha.png',
      audioUrl: 'http://localhost:3000/audios/alpha.mp3',
    },
    {
      text: 'Bravo',
      pronunciation: 'Bra-vo',
      imageUrl: 'http://localhost:3000/icons/bravo.png',
      audioUrl: 'http://localhost:3000/audios/bravo.mp3',
    },
    {
      text: 'Charlie',
      pronunciation: 'Char-li',
      imageUrl: 'http://localhost:3000/icons/charlie.png',
      audioUrl: 'http://localhost:3000/audios/charlie.mp3',
    },
    {
      text: 'Delta',
      pronunciation: 'Del-ta',
      imageUrl: 'http://localhost:3000/icons/delta.png',
      audioUrl: 'http://localhost:3000/audios/delta.mp3',
    },
    {
      text: 'Echo',
      pronunciation: 'Ek-o',
      imageUrl: 'http://localhost:3000/icons/echo.png',
      audioUrl: 'http://localhost:3000/audios/echo.mp3',
    },
    {
      text: 'Foxtrot',
      pronunciation: 'Foks-trot',
      imageUrl: 'http://localhost:3000/icons/foxtrot.png',
      audioUrl: 'http://localhost:3000/audios/foxtrot.mp3',
    },
    {
      text: 'Golf',
      pronunciation: 'Golf',
      imageUrl: 'http://localhost:3000/icons/golf.png',
      audioUrl: 'http://localhost:3000/audios/golf.mp3',
    },
    {
      text: 'Hotel',
      pronunciation: 'Ho-tel',
      imageUrl: 'http://localhost:3000/icons/hotel.png',
      audioUrl: 'http://localhost:3000/audios/hotel.mp3',
    },
    {
      text: 'India',
      pronunciation: 'In-di-a',
      imageUrl: 'http://localhost:3000/icons/india.png',
      audioUrl: 'http://localhost:3000/audios/india.mp3',
    },
    {
      text: 'Juliet',
      pronunciation: 'Dzu-li-et',
      imageUrl: 'http://localhost:3000/icons/juliet.png',
      audioUrl: 'http://localhost:3000/audios/juliet.mp3',
    },
    {
      text: 'Kilo',
      pronunciation: 'Ki-lo',
      imageUrl: 'http://localhost:3000/icons/kilo.png',
      audioUrl: 'http://localhost:3000/audios/kilo.mp3',
    },
    {
      text: 'Lima',
      pronunciation: 'Li-ma',
      imageUrl: 'http://localhost:3000/icons/lima.png',
      audioUrl: 'http://localhost:3000/audios/lima.mp3',
    },
    {
      text: 'Mike',
      pronunciation: 'Mai-k',
      imageUrl: 'http://localhost:3000/icons/mike.png',
      audioUrl: 'http://localhost:3000/audios/mike.mp3',
    },
    {
      text: 'November',
      pronunciation: 'No-vem-ber',
      imageUrl: 'http://localhost:3000/icons/november.png',
      audioUrl: 'http://localhost:3000/audios/november.mp3',
    },
    {
      text: 'Oscar',
      pronunciation: 'Os-kar',
      imageUrl: 'http://localhost:3000/icons/oscar.png',
      audioUrl: 'http://localhost:3000/audios/oscar.mp3',
    },
    {
      text: 'Papa',
      pronunciation: 'Pa-pa',
      imageUrl: 'http://localhost:3000/icons/papa.png',
      audioUrl: 'http://localhost:3000/audios/papa.mp3',
    },
    {
      text: 'Quebec',
      pronunciation: 'Ke-bek',
      imageUrl: 'http://localhost:3000/icons/quebec.png',
      audioUrl: 'http://localhost:3000/audios/quebec.mp3',
    },
    {
      text: 'Romeo',
      pronunciation: 'Ro-mi-o',
      imageUrl: 'http://localhost:3000/icons/romeo.png',
      audioUrl: 'http://localhost:3000/audios/romeo.mp3',
    },
    {
      text: 'Sierra',
      pronunciation: 'Si-er-ra',
      imageUrl: 'http://localhost:3000/icons/sierra.png',
      audioUrl: 'http://localhost:3000/audios/sierra.mp3',
    },
    {
      text: 'Tango',
      pronunciation: 'Tang-go',
      imageUrl: 'http://localhost:3000/icons/tango.png',
      audioUrl: 'http://localhost:3000/audios/tango.mp3',
    },
    {
      text: 'Uniform',
      pronunciation: 'Yu-ni-form',
      imageUrl: 'http://localhost:3000/icons/uniform.png',
      audioUrl: 'http://localhost:3000/audios/uniform.mp3',
    },
    {
      text: 'Victor',
      pronunciation: 'Vik-tor',
      imageUrl: 'http://localhost:3000/icons/victor.png',
      audioUrl: 'http://localhost:3000/audios/victor.mp3',
    },
    {
      text: 'Whiskey',
      pronunciation: 'Wis-ki',
      imageUrl: 'http://localhost:3000/icons/whiskey.png',
      audioUrl: 'http://localhost:3000/audios/whiskey.mp3',
    },
    {
      text: 'X-ray',
      pronunciation: 'Eks-rei',
      imageUrl: 'http://localhost:3000/icons/x-ray.png',
      audioUrl: 'http://localhost:3000/audios/x-ray.mp3',
    },
    {
      text: 'Yankee',
      pronunciation: 'Yang-ki',
      imageUrl: 'http://localhost:3000/icons/yankee.png',
      audioUrl: 'http://localhost:3000/audios/yankee.mp3',
    },
    {
      text: 'Zulu',
      pronunciation: 'Zu-lu',
      imageUrl: 'http://localhost:3000/icons/zulu.png',
      audioUrl: 'http://localhost:3000/audios/zulu.mp3',
    },
  ];

  console.log(' Creando tarjetas del alfabeto aeronáutico...');
  for (const card of aeronauticalAlphabetCards) {
    const existingCard = await prisma.aeronauticalAlphabetCard.findFirst({
      where: { text: card.text },
    });

    if (!existingCard) {
      await prisma.aeronauticalAlphabetCard.create({
        data: card,
      });
    }
  }
  console.log(' Tarjetas del alfabeto aeronáutico creadas');

  // Seed de preguntas de quiz
  const quizQuestions = [
    {
      question:
        '¿Cuál es la palabra del alfabeto aeronáutico que se pronuncia como "Al-fa"?',
      answer: 'Alpha',
    },
    {
      question: '¿Qué letra corresponde a la pronunciación "Bra-vo"?',
      answer: 'Bravo',
    },
    {
      question: '¿Cuál es la palabra que se pronuncia "Char-li"?',
      answer: 'Charlie',
    },
    {
      question: '¿Qué letra del alfabeto aeronáutico suena como "Del-ta"?',
      answer: 'Delta',
    },
    {
      question: '¿Cuál es la pronunciación correcta para "Echo"?',
      answer: 'Ek-o',
    },
    {
      question: '¿Qué palabra del alfabeto se pronuncia "Foks-trot"?',
      answer: 'Foxtrot',
    },
    {
      question: '¿Cuál es la letra que corresponde a "Golf"?',
      answer: 'Golf',
    },
    {
      question: '¿Qué palabra se pronuncia "Ho-tel"?',
      answer: 'Hotel',
    },
    {
      question: '¿Cuál es la pronunciación de "India"?',
      answer: 'In-di-a',
    },
    {
      question: '¿Qué letra suena como "Dzu-li-et"?',
      answer: 'Juliet',
    },
    {
      question: '¿Cuál es la palabra que se pronuncia "Ki-lo"?',
      answer: 'Kilo',
    },
    {
      question: '¿Qué letra corresponde a "Li-ma"?',
      answer: 'Lima',
    },
    {
      question: '¿Cuál es la pronunciación correcta para "Mike"?',
      answer: 'Mai-k',
    },
    {
      question: '¿Qué palabra del alfabeto se pronuncia "No-vem-ber"?',
      answer: 'November',
    },
    {
      question: '¿Cuál es la letra que suena como "Os-kar"?',
      answer: 'Oscar',
    },
    {
      question: '¿Qué palabra se pronuncia "Pa-pa"?',
      answer: 'Papa',
    },
    {
      question: '¿Cuál es la pronunciación de "Quebec"?',
      answer: 'Ke-bek',
    },
    {
      question: '¿Qué letra corresponde a "Ro-mi-o"?',
      answer: 'Romeo',
    },
    {
      question: '¿Cuál es la palabra que se pronuncia "Si-er-ra"?',
      answer: 'Sierra',
    },
    {
      question: '¿Qué letra suena como "Tang-go"?',
      answer: 'Tango',
    },
    {
      question: '¿Cuál es la pronunciación correcta para "Uniform"?',
      answer: 'Yu-ni-form',
    },
    {
      question: '¿Qué palabra del alfabeto se pronuncia "Vik-tor"?',
      answer: 'Victor',
    },
    {
      question: '¿Cuál es la letra que corresponde a "Wis-ki"?',
      answer: 'Whiskey',
    },
    {
      question: '¿Qué palabra suena como "Eks-rei"?',
      answer: 'X-ray',
    },
    {
      question: '¿Cuál es la pronunciación de "Yankee"?',
      answer: 'Yang-ki',
    },
    {
      question: '¿Qué letra se pronuncia "Zu-lu"?',
      answer: 'Zulu',
    },
  ];

  console.log(' Creando preguntas de quiz...');
  for (const quiz of quizQuestions) {
    const existingQuiz = await prisma.quizz.findFirst({
      where: { question: quiz.question },
    });

    if (!existingQuiz) {
      await prisma.quizz.create({
        data: quiz,
      });
    }
  }
  console.log('Preguntas de quiz creadas');

  console.log(' Seed completado exitosamente!');
}

main()
  .catch((e) => {
    console.error(' Error durante el seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

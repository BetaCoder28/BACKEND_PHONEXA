import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed de datos...');

  // Seed de tarjetas del alfabeto aeronáutico
  const aeronauticalAlphabetCards = [
    { text: 'Alpha', pronunciation: 'Al-fa' },
    { text: 'Bravo', pronunciation: 'Bra-vo' },
    { text: 'Charlie', pronunciation: 'Char-li' },
    { text: 'Delta', pronunciation: 'Del-ta' },
    { text: 'Echo', pronunciation: 'Ek-o' },
    { text: 'Foxtrot', pronunciation: 'Foks-trot' },
    { text: 'Golf', pronunciation: 'Golf' },
    { text: 'Hotel', pronunciation: 'Ho-tel' },
    { text: 'India', pronunciation: 'In-di-a' },
    { text: 'Juliet', pronunciation: 'Dzu-li-et' },
    { text: 'Kilo', pronunciation: 'Ki-lo' },
    { text: 'Lima', pronunciation: 'Li-ma' },
    { text: 'Mike', pronunciation: 'Mai-k' },
    { text: 'November', pronunciation: 'No-vem-ber' },
    { text: 'Oscar', pronunciation: 'Os-kar' },
    { text: 'Papa', pronunciation: 'Pa-pa' },
    { text: 'Quebec', pronunciation: 'Ke-bek' },
    { text: 'Romeo', pronunciation: 'Ro-mi-o' },
    { text: 'Sierra', pronunciation: 'Si-er-ra' },
    { text: 'Tango', pronunciation: 'Tang-go' },
    { text: 'Uniform', pronunciation: 'Yu-ni-form' },
    { text: 'Victor', pronunciation: 'Vik-tor' },
    { text: 'Whiskey', pronunciation: 'Wis-ki' },
    { text: 'X-ray', pronunciation: 'Eks-rei' },
    { text: 'Yankee', pronunciation: 'Yang-ki' },
    { text: 'Zulu', pronunciation: 'Zu-lu' },
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
      question: '¿Cuál es la palabra del alfabeto aeronáutico que se pronuncia como "Al-fa"?',
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
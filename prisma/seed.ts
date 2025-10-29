import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed de datos...');

  // Limpiar datos existentes
  console.log('🧹 Limpiando datos existentes...');
  await prisma.quizz.deleteMany();
  await prisma.aeronauticalAlphabetCard.deleteMany();
  console.log('✅ Datos limpiados');

  // Seed de tarjetas del alfabeto aeronáutico
  const aeronauticalAlphabetCards = [
    {
      text: 'Alpha',
      pronunciation: 'Al-fa',
      imageUrl: 'alpha.svg',
      audioUrl: 'alpha.mp3',
    },
    {
      text: 'Bravo',
      pronunciation: 'Bra-vo',
      imageUrl: 'bravo.svg',
      audioUrl: 'bravo.mp3',
    },
    {
      text: 'Charlie',
      pronunciation: 'Char-li',
      imageUrl: 'charlie.svg',
      audioUrl: 'charlie.mp3',
    },
    {
      text: 'Delta',
      pronunciation: 'Del-ta',
      imageUrl: 'delta.svg',
      audioUrl: 'delta.mp3',
    },
    {
      text: 'Echo',
      pronunciation: 'Ek-o',
      imageUrl: 'echo.svg',
      audioUrl: 'echo.mp3',
    },
    {
      text: 'Foxtrot',
      pronunciation: 'Foks-trot',
      imageUrl: 'foxtrot.svg',
      audioUrl: 'foxtrot.mp3',
    },
    {
      text: 'Golf',
      pronunciation: 'Golf',
      imageUrl: 'golf.svg',
      audioUrl: 'golf.mp3',
    },
    {
      text: 'Hotel',
      pronunciation: 'Ho-tel',
      imageUrl: 'hotel.svg',
      audioUrl: 'hotel.mp3',
    },
    {
      text: 'India',
      pronunciation: 'In-di-a',
      imageUrl: 'india.svg',
      audioUrl: 'india.mp3',
    },
    {
      text: 'Juliet',
      pronunciation: 'Dzu-li-et',
      imageUrl: 'juliet.svg',
      audioUrl: 'juliet.mp3',
    },
    {
      text: 'Kilo',
      pronunciation: 'Ki-lo',
      imageUrl: 'kilo.svg',
      audioUrl: 'kilo.mp3',
    },
    {
      text: 'Lima',
      pronunciation: 'Li-ma',
      imageUrl: 'lima.svg',
      audioUrl: 'lima.mp3',
    },
    {
      text: 'Mike',
      pronunciation: 'Mai-k',
      imageUrl: 'mike.svg',
      audioUrl: 'mike.mp3',
    },
    {
      text: 'November',
      pronunciation: 'No-vem-ber',
      imageUrl: 'november.svg',
      audioUrl: 'november.mp3',
    },
    {
      text: 'Oscar',
      pronunciation: 'Os-kar',
      imageUrl: 'oscar.svg',
      audioUrl: 'oscar.mp3',
    },
    {
      text: 'Papa',
      pronunciation: 'Pa-pa',
      imageUrl: 'papa.svg',
      audioUrl: 'papa.mp3',
    },
    {
      text: 'Quebec',
      pronunciation: 'Ke-bek',
      imageUrl: 'quebec.svg',
      audioUrl: 'quebec.mp3',
    },
    {
      text: 'Romeo',
      pronunciation: 'Ro-mi-o',
      imageUrl: 'romeo.svg',
      audioUrl: 'romeo.mp3',
    },
    {
      text: 'Sierra',
      pronunciation: 'Si-er-ra',
      imageUrl: 'sierra.svg',
      audioUrl: 'sierra.mp3',
    },
    {
      text: 'Tango',
      pronunciation: 'Tang-go',
      imageUrl: 'tango.svg',
      audioUrl: 'tango.mp3',
    },
    {
      text: 'Uniform',
      pronunciation: 'Yu-ni-form',
      imageUrl: 'uniform.svg',
      audioUrl: 'uniform.mp3',
    },
    {
      text: 'Victor',
      pronunciation: 'Vik-tor',
      imageUrl: 'victor.svg',
      audioUrl: 'victor.mp3',
    },
    {
      text: 'Whiskey',
      pronunciation: 'Wis-ki',
      imageUrl: 'whiskey.svg',
      audioUrl: 'whiskey.mp3',
    },
    {
      text: 'X-ray',
      pronunciation: 'Eks-rei',
      imageUrl: 'x-ray.svg',
      audioUrl: 'x-ray.mp3',
    },
    {
      text: 'Yankee',
      pronunciation: 'Yang-ki',
      imageUrl: 'yankee.svg',
      audioUrl: 'yankee.mp3',
    },
    {
      text: 'Zulu',
      pronunciation: 'Zu-lu',
      imageUrl: 'zulu.svg',
      audioUrl: 'zulu.mp3',
    },
  ];

  console.log('🪶 Creando tarjetas del alfabeto aeronáutico...');
  for (const card of aeronauticalAlphabetCards) {
    const existingCard = await prisma.aeronauticalAlphabetCard.findFirst({
      where: { text: card.text },
    });
    if (!existingCard) {
      await prisma.aeronauticalAlphabetCard.create({ data: card });
    }
  }
  console.log('✅ Tarjetas creadas');

  // Preguntas del quiz
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
      answer: 'Echo',
    },
    {
      question: '¿Qué palabra del alfabeto se pronuncia "Foks-trot"?',
      answer: 'Foxtrot',
    },
    { question: '¿Cuál es la letra que corresponde a "Golf"?', answer: 'Golf' },
    { question: '¿Qué palabra se pronuncia "Ho-tel"?', answer: 'Hotel' },
    { question: '¿Cuál es la pronunciación de "India"?', answer: 'India' },
    { question: '¿Qué letra suena como "Dzu-li-et"?', answer: 'Juliet' },
    {
      question: '¿Cuál es la palabra que se pronuncia "Ki-lo"?',
      answer: 'Kilo',
    },
    { question: '¿Qué letra corresponde a "Li-ma"?', answer: 'Lima' },
    {
      question: '¿Cuál es la pronunciación correcta para "Mike"?',
      answer: 'Mike',
    },
    {
      question: '¿Qué palabra del alfabeto se pronuncia "No-vem-ber"?',
      answer: 'November',
    },
    { question: '¿Cuál es la letra que suena como "Os-kar"?', answer: 'Oscar' },
    { question: '¿Qué palabra se pronuncia "Pa-pa"?', answer: 'Papa' },
    { question: '¿Cuál es la pronunciación de "Quebec"?', answer: 'Quebec' },
    { question: '¿Qué letra corresponde a "Ro-mi-o"?', answer: 'Romeo' },
    {
      question: '¿Cuál es la palabra que se pronuncia "Si-er-ra"?',
      answer: 'Sierra',
    },
    { question: '¿Qué letra suena como "Tang-go"?', answer: 'Tango' },
    {
      question: '¿Cuál es la pronunciación correcta para "Uniform"?',
      answer: 'Uniform',
    },
    {
      question: '¿Qué palabra del alfabeto se pronuncia "Vik-tor"?',
      answer: 'Victor',
    },
    {
      question: '¿Cuál es la letra que corresponde a "Wis-ki"?',
      answer: 'Whiskey',
    },
    { question: '¿Qué palabra suena como "Eks-rei"?', answer: 'X-ray' },
    { question: '¿Cuál es la pronunciación de "Yankee"?', answer: 'Yankee' },
    { question: '¿Qué letra se pronuncia "Zu-lu"?', answer: 'Zulu' },
  ];

  console.log('🧠 Creando preguntas de quiz...');
  for (const quiz of quizQuestions) {
    const existingQuiz = await prisma.quizz.findFirst({
      where: { question: quiz.question },
    });
    if (!existingQuiz) {
      await prisma.quizz.create({ data: quiz });
    }
  }
  console.log('✅ Preguntas creadas');

  console.log('🎉 Seed completado exitosamente!');
}

main()
  .catch((e) => {
    console.error('❌ Error durante el seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

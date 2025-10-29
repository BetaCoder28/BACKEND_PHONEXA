"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('🌱 Iniciando seed de datos...');
    console.log('🧹 Limpiando datos existentes...');
    await prisma.quizz.deleteMany();
    await prisma.aeronauticalAlphabetCard.deleteMany();
    console.log('✅ Datos limpiados');
    const baseUrl = 'https://backend-phonexa.onrender.com';
    const aeronauticalAlphabetCards = [
        {
            text: 'Alpha',
            pronunciation: 'Al-fa',
            imageUrl: `${baseUrl}/icons/alpha.svg`,
            audioUrl: `${baseUrl}/sounds/alpha.mp3`,
        },
        {
            text: 'Bravo',
            pronunciation: 'Bra-vo',
            imageUrl: `${baseUrl}/icons/bravo.svg`,
            audioUrl: `${baseUrl}/sounds/bravo.mp3`,
        },
        {
            text: 'Charlie',
            pronunciation: 'Char-li',
            imageUrl: `${baseUrl}/icons/charlie.svg`,
            audioUrl: `${baseUrl}/sounds/charlie.mp3`,
        },
        {
            text: 'Delta',
            pronunciation: 'Del-ta',
            imageUrl: `${baseUrl}/icons/delta.svg`,
            audioUrl: `${baseUrl}/sounds/delta.mp3`,
        },
        {
            text: 'Echo',
            pronunciation: 'Ek-o',
            imageUrl: `${baseUrl}/icons/echo.svg`,
            audioUrl: `${baseUrl}/sounds/echo.mp3`,
        },
        {
            text: 'Foxtrot',
            pronunciation: 'Foks-trot',
            imageUrl: `${baseUrl}/icons/foxtrot.svg`,
            audioUrl: `${baseUrl}/sounds/foxtrot.mp3`,
        },
        {
            text: 'Golf',
            pronunciation: 'Golf',
            imageUrl: `${baseUrl}/icons/golf.svg`,
            audioUrl: `${baseUrl}/sounds/golf.mp3`,
        },
        {
            text: 'Hotel',
            pronunciation: 'Ho-tel',
            imageUrl: `${baseUrl}/icons/hotel.svg`,
            audioUrl: `${baseUrl}/sounds/hotel.mp3`,
        },
        {
            text: 'India',
            pronunciation: 'In-di-a',
            imageUrl: `${baseUrl}/icons/india.svg`,
            audioUrl: `${baseUrl}/sounds/india.mp3`,
        },
        {
            text: 'Juliet',
            pronunciation: 'Dzu-li-et',
            imageUrl: `${baseUrl}/icons/juliet.svg`,
            audioUrl: `${baseUrl}/sounds/juliet.mp3`,
        },
        {
            text: 'Kilo',
            pronunciation: 'Ki-lo',
            imageUrl: `${baseUrl}/icons/kilo.svg`,
            audioUrl: `${baseUrl}/sounds/kilo.mp3`,
        },
        {
            text: 'Lima',
            pronunciation: 'Li-ma',
            imageUrl: `${baseUrl}/icons/lima.svg`,
            audioUrl: `${baseUrl}/sounds/lima.mp3`,
        },
        {
            text: 'Mike',
            pronunciation: 'Mai-k',
            imageUrl: `${baseUrl}/icons/mike.svg`,
            audioUrl: `${baseUrl}/sounds/mike.mp3`,
        },
        {
            text: 'November',
            pronunciation: 'No-vem-ber',
            imageUrl: `${baseUrl}/icons/november.svg`,
            audioUrl: `${baseUrl}/sounds/november.mp3`,
        },
        {
            text: 'Oscar',
            pronunciation: 'Os-kar',
            imageUrl: `${baseUrl}/icons/oscar.svg`,
            audioUrl: `${baseUrl}/sounds/oscar.mp3`,
        },
        {
            text: 'Papa',
            pronunciation: 'Pa-pa',
            imageUrl: `${baseUrl}/icons/papa.svg`,
            audioUrl: `${baseUrl}/sounds/papa.mp3`,
        },
        {
            text: 'Quebec',
            pronunciation: 'Ke-bek',
            imageUrl: `${baseUrl}/icons/quebec.svg`,
            audioUrl: `${baseUrl}/sounds/quebec.mp3`,
        },
        {
            text: 'Romeo',
            pronunciation: 'Ro-mi-o',
            imageUrl: `${baseUrl}/icons/romeo.svg`,
            audioUrl: `${baseUrl}/sounds/romeo.mp3`,
        },
        {
            text: 'Sierra',
            pronunciation: 'Si-er-ra',
            imageUrl: `${baseUrl}/icons/sierra.svg`,
            audioUrl: `${baseUrl}/sounds/sierra.mp3`,
        },
        {
            text: 'Tango',
            pronunciation: 'Tang-go',
            imageUrl: `${baseUrl}/icons/tango.svg`,
            audioUrl: `${baseUrl}/sounds/tango.mp3`,
        },
        {
            text: 'Uniform',
            pronunciation: 'Yu-ni-form',
            imageUrl: `${baseUrl}/icons/uniform.svg`,
            audioUrl: `${baseUrl}/sounds/uniform.mp3`,
        },
        {
            text: 'Victor',
            pronunciation: 'Vik-tor',
            imageUrl: `${baseUrl}/icons/victor.svg`,
            audioUrl: `${baseUrl}/sounds/victor.mp3`,
        },
        {
            text: 'Whiskey',
            pronunciation: 'Wis-ki',
            imageUrl: `${baseUrl}/icons/whiskey.svg`,
            audioUrl: `${baseUrl}/sounds/whiskey.mp3`,
        },
        {
            text: 'X-ray',
            pronunciation: 'Eks-rei',
            imageUrl: `${baseUrl}/icons/xray.svg`,
            audioUrl: `${baseUrl}/sounds/xray.mp3`,
        },
        {
            text: 'Yankee',
            pronunciation: 'Yang-ki',
            imageUrl: `${baseUrl}/icons/yankee.svg`,
            audioUrl: `${baseUrl}/sounds/yankee.mp3`,
        },
        {
            text: 'Zulu',
            pronunciation: 'Zu-lu',
            imageUrl: `${baseUrl}/icons/zulu.svg`,
            audioUrl: `${baseUrl}/sounds/zulu.mp3`,
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
//# sourceMappingURL=seed.js.map
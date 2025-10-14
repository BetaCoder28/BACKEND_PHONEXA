import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Datos estandarizados del alfabeto aeronáutico (OACI/OTAN)
const alfabetoData = [
  {
    letter: 'A',
    code: 'Alfa',
    pronunciation: 'AL-FAH',
    audioUrl: '/audios/alfa.mp3',
    iconUrl: '/icons/A.png',
  },
  {
    letter: 'B',
    code: 'Bravo',
    pronunciation: 'BRAH-VOH',
    audioUrl: '/audios/bravo.mp3',
    iconUrl: '/icons/B.png',
  },
  {
    letter: 'C',
    code: 'Charlie',
    pronunciation: 'CHAR-LEE',
    audioUrl: '/audios/charlie.mp3',
    iconUrl: '/icons/C.png',
  },
  {
    letter: 'D',
    code: 'Delta',
    pronunciation: 'DELL-TAH',
    audioUrl: '/audios/delta.mp3',
    iconUrl: '/icons/D.png',
  },
  {
    letter: 'E',
    code: 'Echo',
    pronunciation: 'EH-KHO',
    audioUrl: '/audios/echo.mp3',
    iconUrl: '/icons/E.png',
  },
  {
    letter: 'F',
    code: 'Foxtrot',
    pronunciation: 'FOKS-TROT',
    audioUrl: '/audios/foxtrot.mp3',
    iconUrl: '/icons/F.png',
  },
  {
    letter: 'G',
    code: 'Golf',
    pronunciation: 'GOLF',
    audioUrl: '/audios/golf.mp3',
    iconUrl: '/icons/G.png',
  },
  {
    letter: 'H',
    code: 'Hotel',
    pronunciation: 'HOH-TEL',
    audioUrl: '/audios/hotel.mp3',
    iconUrl: '/icons/H.png',
  },
  {
    letter: 'I',
    code: 'India',
    pronunciation: 'IN-DEE-AH',
    audioUrl: '/audios/india.mp3',
    iconUrl: '/icons/I.png',
  },
  {
    letter: 'J',
    code: 'Juliett',
    pronunciation: 'YÚ-LI-ET',
    audioUrl: '/audios/juliett.mp3',
    iconUrl: '/icons/J.png',
  },
  {
    letter: 'K',
    code: 'Kilo',
    pronunciation: 'KÍ-LOH',
    audioUrl: '/audios/kilo.mp3',
    iconUrl: '/icons/K.png',
  },
  {
    letter: 'L',
    code: 'Lima',
    pronunciation: 'LÍ-MAH',
    audioUrl: '/audios/lima.mp3',
    iconUrl: '/icons/L.png',
  },
  {
    letter: 'M',
    code: 'Mike',
    pronunciation: 'MAIK',
    audioUrl: '/audios/mike.mp3',
    iconUrl: '/icons/M.png',
  },
  {
    letter: 'N',
    code: 'November',
    pronunciation: 'NOH-VEM-BER',
    audioUrl: '/audios/november.mp3',
    iconUrl: '/icons/N.png',
  },
  {
    letter: 'O',
    code: 'Oscar',
    pronunciation: 'OS-CAH',
    audioUrl: '/audios/oscar.mp3',
    iconUrl: '/icons/O.png',
  },
  {
    letter: 'P',
    code: 'Papa',
    pronunciation: 'PAH-PAH',
    audioUrl: '/audios/papa.mp3',
    iconUrl: '/icons/P.png',
  },
  {
    letter: 'Q',
    code: 'Quebec',
    pronunciation: 'KEH-BEK',
    audioUrl: '/audios/quebec.mp3',
    iconUrl: '/icons/Q.png',
  },
  {
    letter: 'R',
    code: 'Romeo',
    pronunciation: 'ROH-MI-OH',
    audioUrl: '/audios/romeo.mp3',
    iconUrl: '/icons/R.png',
  },
  {
    letter: 'S',
    code: 'Sierra',
    pronunciation: 'SEE-AIR-RAH',
    audioUrl: '/audios/sierra.mp3',
    iconUrl: '/icons/S.png',
  },
  {
    letter: 'T',
    code: 'Tango',
    pronunciation: 'TANG-GO',
    audioUrl: '/audios/tango.mp3',
    iconUrl: '/icons/T.png',
  },
  {
    letter: 'U',
    code: 'Uniform',
    pronunciation: 'YÚ-NI-FORM',
    audioUrl: '/audios/uniform.mp3',
    iconUrl: '/icons/U.png',
  },
  {
    letter: 'V',
    code: 'Victor',
    pronunciation: 'VÍK-TAH',
    audioUrl: '/audios/victor.mp3',
    iconUrl: '/icons/V.png',
  },
  {
    letter: 'W',
    code: 'Whiskey',
    pronunciation: 'WIS-KI',
    audioUrl: '/audios/whiskey.mp3',
    iconUrl: '/icons/W.png',
  },
  {
    letter: 'X',
    code: 'X-ray',
    pronunciation: 'EKS-REI',
    audioUrl: '/audios/xray.mp3',
    iconUrl: '/icons/X.png',
  },
  {
    letter: 'Y',
    code: 'Yankee',
    pronunciation: 'YANG-KI',
    audioUrl: '/audios/yankee.mp3',
    iconUrl: '/icons/Y.png',
  },
  {
    letter: 'Z',
    code: 'Zulu',
    pronunciation: 'ZÚ-LU',
    audioUrl: '/audios/zulu.mp3',
    iconUrl: '/icons/Z.png',
  },
];

async function main() {
  console.log('Iniciando siembra de datos...');
  //Posible limpiador de la base de datos en dado caso de error.
  //await prisma.alphabet.deleteMany({});

  for (const data of alfabetoData) {
    await prisma.alphabet.upsert({
      where: { letter: data.letter },
      update: data,
      create: data,
    });
  }
  console.log(
    '✅ Siembra del Alfabeto Aeronáutico completada. 26 entradas insertadas/actualizadas.',
  );
}

main()
  .catch((e) => {
    console.error('❌ Error durante la siembra de datos:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoliticasService = void 0;
const common_1 = require("@nestjs/common");
let PoliticasService = class PoliticasService {
    getPolitcy() {
        return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Política de Privacidad - Phonexa</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 40px;
      line-height: 1.6;
      color: #333;
    }
    h1, h2 {
      color: #1a3c8b;
    }
    h1 {
      text-align: center;
      margin-bottom: 30px;
    }
    h2 {
      margin-top: 25px;
    }
    ul {
      list-style-type: disc;
      padding-left: 20px;
    }
    strong {
      color: #000;
    }
  </style>
</head>
<body>
  <h1>Política de Privacidad<br>Phonexa - Alfabeto Aeronáutico</h1>
  <p><strong>Última actualización:</strong> 17 de octubre de 2025</p>

  <p>Phonexa se compromete a proteger tu privacidad. Esta Política de Privacidad explica cómo manejamos tu información cuando utilizas nuestra aplicación móvil para aprender el alfabeto aeronáutico.</p>

  <h2>Tu Privacidad es Nuestra Prioridad</h2>
  <p><strong>Phonexa no recopila, almacena ni comparte ningún dato personal identificable.</strong></p>

  <h2>1. Información que Recopilamos</h2>
  <p>Phonexa es una aplicación educativa diseñada para funcionar completamente de forma local en tu dispositivo. A continuación, detallamos qué información maneja la aplicación:</p>
  <ul>
    <li><strong>Almacenamiento Local Únicamente:</strong> Toda la información se guarda exclusivamente en tu dispositivo y nunca se transmite a servidores externos.</li>
    <li><strong>Resultados de Exámenes:</strong> La aplicación almacena localmente en tu dispositivo los resultados de los exámenes que realizas.</li>
    <li><strong>Progreso de Aprendizaje:</strong> Se guarda tu progreso mientras navegas por las letras del alfabeto aeronáutico.</li>
  </ul>

  <p><strong>NO recopilamos:</strong></p>
  <ul>
    <li>Nombre, correo electrónico o información de contacto</li>
    <li>Datos de ubicación GPS</li>
    <li>Información del dispositivo o identificadores únicos</li>
    <li>Información de navegación o uso de la app</li>
    <li>Fotografías, micrófono o cualquier sensor del dispositivo</li>
  </ul>

  <h2>2. Cómo Utilizamos tu Información</h2>
  <p>La información almacenada localmente se utiliza exclusivamente para:</p>
  <ul>
    <li>Mostrar tu progreso y resultados históricos.</li>
    <li>Mejorar la experiencia de usuario.</li>
    <li>Permitir el correcto funcionamiento de la aplicación.</li>
  </ul>
  <p><strong>Importante:</strong> Si desinstalas la aplicación, toda tu información será eliminada permanentemente.</p>

  <h2>3. Compartir Información con Terceros</h2>
  <p>No compartimos ninguna información con terceros. Phonexa no utiliza servicios de terceros que recopilen datos.</p>
  <ul>
    <li>No utilizamos servicios de análisis</li>
    <li>No mostramos publicidad de terceros</li>
    <li>No integramos redes sociales</li>
    <li>No enviamos datos a servidores externos</li>
  </ul>

  <h2>4. Seguridad de los Datos</h2>
  <ul>
    <li>Almacenamiento seguro mediante mecanismos del sistema operativo Android.</li>
    <li>Encriptación de contraseñas según estándares actuales.</li>
    <li>Sin transmisión de datos: la app funciona completamente offline.</li>
  </ul>

  <h2>5. Permisos de la Aplicación</h2>
  <p>Phonexa solicita los siguientes permisos mínimos:</p>
  <ul>
    <li>Almacenamiento</li>
    <li>Audio</li>
  </ul>
  <p><strong>Permisos que NO solicitamos:</strong></p>
  <ul>
    <li>Acceso a Internet</li>
    <li>Ubicación</li>
    <li>Cámara</li>
    <li>Micrófono</li>
    <li>Contactos</li>
    <li>Mensajes o llamadas</li>
  </ul>

  <h2>6. Retención de Datos</h2>
  <p>Los datos se almacenan solo mientras la aplicación esté instalada. Puedes eliminar los datos manualmente o al desinstalar la app.</p>

  <h2>7. Privacidad de Menores</h2>
  <p>Phonexa es segura para todas las edades. No recopilamos datos personales ni requerimos registro.</p>

  <h2>8. Cambios en el Futuro</h2>
  <p>Si en futuras versiones se añade conexión a internet, esta Política será actualizada antes del lanzamiento. Te notificaremos dentro de la app.</p>

  <h2>9. Tecnologías Utilizadas</h2>
  <ul>
    <li>React Native</li>
    <li>Almacenamiento local de Android</li>
  </ul>
  <p>En el futuro, si se implementa backend con Django y PostgreSQL, esta política se actualizará.</p>

  <h2>10. Tus Derechos</h2>
  <ul>
    <li>Acceso a tus resultados</li>
    <li>Eliminación de tus datos</li>
    <li>Control total de la información</li>
    <li>Portabilidad (sin exportación actual)</li>
  </ul>

  <h2>11. Cumplimiento de Regulaciones</h2>
  <ul>
    <li>GDPR (Europa)</li>
    <li>CCPA (California)</li>
    <li>LFPDPPP (México)</li>
    <li>COPPA (Protección de Menores)</li>
  </ul>

  <h2>12. Transparencia</h2>
  <p>Phonexa no monetiza ni comparte tus datos. Su único propósito es educativo.</p>
</body>
</html>
    `;
    }
};
exports.PoliticasService = PoliticasService;
exports.PoliticasService = PoliticasService = __decorate([
    (0, common_1.Injectable)()
], PoliticasService);
//# sourceMappingURL=politicas.service.js.map
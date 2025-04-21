const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Configuración de middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Configuración del motor de plantillas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Datos de ejemplo (simulando una base de datos)
const tesisList = [
  { id: 1, titulo: 'Implementación de IA para mejora de procesos en PYMES', estudiante: 'Ana García', asesor: 'Dr. Juan Pérez', estado: 'En revisión', fecha_entrega: '15/05/2025', tipo: 'Tesis' },
  { id: 2, titulo: 'Desarrollo de aplicación móvil para monitoreo de especies en peligro', estudiante: 'Carlos Rodríguez', asesor: 'Dra. María Sánchez', estado: 'Aprobado', fecha_entrega: '10/04/2025', tipo: 'Tesis' }
];

const pretesisList = [
  { id: 1, titulo: 'Sistema de reconocimiento facial para control de asistencia', estudiante: 'Luis Mendoza', asesor: 'Dr. Roberto Gómez', estado: 'En desarrollo', fecha_entrega: '20/06/2025', tipo: 'Pretesis' },
  { id: 2, titulo: 'Aplicación web para gestión de inventarios con blockchain', estudiante: 'Diana Torres', asesor: 'Dra. Patricia Luna', estado: 'Pendiente de revisión', fecha_entrega: '05/07/2025', tipo: 'Pretesis' }
];

const estudiantesList = [
  { id: 1, nombre: 'Ana García', email: 'ana.garcia@tecsup.edu.pe', carrera: 'Diseño y Desarrollo de Software', ciclo: 8 },
  { id: 2, nombre: 'Carlos Rodríguez', email: 'carlos.rodriguez@tecsup.edu.pe', carrera: 'Diseño y Desarrollo de Software', ciclo: 9 },
  { id: 3, nombre: 'Luis Mendoza', email: 'luis.mendoza@tecsup.edu.pe', carrera: 'Diseño y Desarrollo de Software', ciclo: 8 },
  { id: 4, nombre: 'Diana Torres', email: 'diana.torres@tecsup.edu.pe', carrera: 'Diseño y Desarrollo de Software', ciclo: 9 }
];

const asesoresList = [
  { id: 1, nombre: 'Dr. Juan Pérez', email: 'juan.perez@tecsup.edu.pe', especialidad: 'Inteligencia Artificial' },
  { id: 2, nombre: 'Dra. María Sánchez', email: 'maria.sanchez@tecsup.edu.pe', especialidad: 'Desarrollo Móvil' },
  { id: 3, nombre: 'Dr. Roberto Gómez', email: 'roberto.gomez@tecsup.edu.pe', especialidad: 'Visión por Computadora' },
  { id: 4, nombre: 'Dra. Patricia Luna', email: 'patricia.luna@tecsup.edu.pe', especialidad: 'Blockchain y Seguridad' }
];

// Rutas
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/tesisypretesis', (req, res) => {
  const combinedList = [...tesisList, ...pretesisList];
  res.render('tesisypretesis', { proyectos: combinedList });
});

app.get('/estudiantes', (req, res) => {
  res.render('estudiantes', { estudiantes: estudiantesList });
});

app.get('/asesores', (req, res) => {
  res.render('asesores', { asesores: asesoresList });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor de Thesia ejecutándose en http://localhost:${port}`);
});
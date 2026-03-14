import express from 'express';
import { obtenerSuperheroePorIdController, buscarSuperheroesPorAtributoController, obtenerSuperheroesMayoresDe30Controller } from './src/controllers/superheroesController.mjs';

const app = express();
const PORT = 3005;

app.get('/superheroes/id/:id', obtenerSuperheroePorIdController);
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController);
app.get('/superheroes/edad/mayora30', obtenerSuperheroesMayoresDe30Controller);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
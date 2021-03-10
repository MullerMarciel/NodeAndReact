const { request } = require('express');
const express = require('express');

const app = express();

app.use

/**
 * Métodos HTTP
 * 
 * GET: Buscar informações do back-end
 * POST: Criar informação no back-end
 * PUT/PATCH: Alterar uma informação no back-end 
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros (formas de requisição para enviar informações)
  * 
  * Query Params: Filtros e paginação
  * Route Params: Identificar recursos (Atualização/Deletar)
  * Request Body: Conteudo na hora criar ou editar um recurso (JSON)
  * 
  */

app.get('/projects', (request, response) => {
  const { title, owner } = request.query

  console.log(title);
  console.log(owner);
  
  return response.json([
   'Project 1',
   'Project 2',
  ]);
});

app.post('/projects', (request, response) => {
  const body = request.body;

  console.log(body);

  return response.json([
    'Projeto 4',
    'Projeto 2',
    'Projeto 3',
  ]);
});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;

  console.log(id);

  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
  ]);
});

app.delete('/projects/:id', (request, response) => {
  return response.json([
    'Projeto 2',
    'Projeto 3',
  ]);
});


//dentro desse app pode receber um segundo parametro como o 3333, () => ...

app.listen(3333, () => {
  console.log('😊 Back-end started!');
});


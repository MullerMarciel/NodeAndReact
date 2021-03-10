//const { request } = require('express');
const express = require('express');
const { uuid } = require('uuidv4')

const app = express();

app.use(express.json());

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

 const projects = [];

app.get('/projects', (request, response) => {
  //const { title, owner } = request.query

  //console.log(title);
  //console.log(owner);
  
  return response.json(projects);
});

app.post('/projects', (request, response) => {
  const {title, owner} = request.body;

  const project = { id: uuid(), title, owner };

  projects.push(project);

  return response.json(project);
});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;
  const {title, owner} = request.body;

  const projectIndex = projects.findIndex(project => project.id == id);

  if (projectIndex < 0){
    return response.status(400).json({ error: 'Project not found.' })
  }
  const project = {
    id,
    title,
    owner,
  };

  projects[projectIndex] = project

  return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;

  const projectIndex = projects.findIndex(project => project.id == id);

  if (projectIndex < 0){
    return response.status(400).json({ error: 'Project not found.' })
  }

  projects.splice(projectIndex, 1);

  return response.status(204).send();
});


//dentro desse app pode receber um segundo parametro como o 3333, () => ...

app.listen(3333, () => {
  console.log('😊 Back-end started!');
});


const {
  describe, before, after, it,
} = require('mocha');
const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const app = require('../../index');
const { Task } = require('../database/models');
const { Task: taskMock } = require('./mock/models');

const { expect } = chai;

chai.use(chaiHttp);

describe('Request POST /task', () => {
  before(async () => {
    sinon
      .stub(Task, 'findAll')
      .callsFake(taskMock.findAll);
    sinon
      .stub(Task, 'create')
      .callsFake(taskMock.create);
  });

  after(() => {
    Task.findAll.restore();
    Task.create.restore();
  });

  describe('inserts new task with correct body', () => {
    let createRequest = {};
    let firstTaskResponse = {};
    let secondTaskResponse = {};
    const newTask = {
      task: 'Realizar testes',
      status: 'em andamento',
    };

    before(async () => {
      firstTaskResponse = await chai
        .request(app).get('/task');
      createRequest = await chai
        .request(app).post('/task').send(newTask);
      secondTaskResponse = await chai
        .request(app).get('/task');
    });

    it('first task list returns 2 items', () => {
      expect(firstTaskResponse.body).to.have.length(2);
    });

    it('the POST request returns status 201', () => {
      expect(createRequest).to.have.status(201);
    });

    it('the POST request returns the new task', () => {
      const createdTask = {
        ...newTask,
        id: 3,
        createdAt: '2022-05-19T23:18:01.000Z',
      };

      expect(createRequest.body).to.be.deep.equal(createdTask);
    });

    it('second task list returns 3 items', () => {
      expect(secondTaskResponse.body).to.have.length(3);
    });

    it('second task list contains new task', () => {
      expect(secondTaskResponse.body[2]).to.contain(newTask);
    });
  });

  describe('inserts new task with incorrect status', () => {
    let createRequest = {};
    const newTask = {
      task: 'Realizar testes',
      status: 'status_invalido',
    };

    before(async () => {
      createRequest = await chai
        .request(app).post('/task').send(newTask);
    });

    it('the POST request returns status 400', () => {
      expect(createRequest).to.have.status(400);
    });

    it('the POST request returns error message', () => {
      const message = "Status can be only 'pendente', 'em andamento' ou 'pronto'";

      expect(createRequest.body.message).to.be.equal(message);
    });
  });
});

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

describe('Request GET /task returns', () => {
  let response;

  before(async () => {
    sinon
      .stub(Task, 'findAll')
      .callsFake(taskMock.findAll);
    response = await chai.request(app).get('/task');
  });

  after(() => {
    Task.findAll.restore();
  });

  it('status 200', () => {
    expect(response.status).to.be.equals(200);
  });

  it('tasks as expected', () => {
    const expectedResponse = [
      {
        id: 1,
        task: 'Fazer teste técnico para Ebyrt',
        status: 'em andamento',
        createdAt: '2022-05-18T23:18:01.000Z',
      },
      {
        id: 2,
        task: 'Treinar pitch pessoal',
        status: 'pendente',
        createdAt: '2022-05-18T23:18:01.000Z',
      },
    ];

    expect(response.body).to.be.deep.equal(expectedResponse);
  });
});

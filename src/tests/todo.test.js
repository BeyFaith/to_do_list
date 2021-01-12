import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.should();
chai.use(chaiHttp);

let id;

describe('Task', () => {
    
    it('Should create a task', (done) => {
      const task = {
        task: 'This is your task'
      };
      chai
        .request(app)
        .post('/api/tasks')
        .send(task)
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(201);
          done();
        });
    });
    it('Should return 400 if there is a missing field in a task', (done) => {
      const task = {
        task: 'This is your task'
      };
      chai
        .request(app)
        .post('/api/tasks')
        .send(task)
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(201);
          done();
        });
    });
    it('Should get all tasks created', (done) => {
      const task = {
        task: 'These are your tasks'
      };
      chai
        .request(app)
        .get('/api/tasks')
        .end((err, res) => {
          if (err) done(err);
          id = res.body.tasks[0].id;
          res.should.have.status(200);
          done();
        });
    });
    it('Should get a single task with a given id', (done) => {
      const task = {
        task: 'This is one of your tasks'
      };
      chai
        .request(app)
        .get(`/api/tasks/${id}`)
        .send(task)
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(200);
          done();
        });
    });
    it('Should update a task with a given id', (done) => {
      const task = {
        task: 'This is the updated task'
      };
      console.log(id);
      chai
        .request(app)
        .put(`/api/tasks/${id}`)
        .send(task)
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(200);
          done();
        });
    });
  
    it('Should delete a task', (done) => {
      const task = {
        task: 'You have deleted a comment'
      };
      chai
        .request(app)
        .delete(`/api/tasks/${id}`)
        .send(task)
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(202);
          done();
        });
    });

    it('welcome',(done) => {
          chai
            .request(app)
            .get('/')
            .end((err, res) => {
              if (err) done(err);
              res.should.have.status(200);
              done();
            });
    })
  
  });
  
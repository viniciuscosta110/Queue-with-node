import 'dotenv/config';
import express from 'express';
import UserController from './app/controllers/UserController';
import bullBoard from 'bull-board';
import Queue from './app/lib/Queue';

const app = express();

bullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json());
app.post('/users', UserController.store);

app.use('/admin/queues', bullBoard.UI);

app.listen(3333, () => {
    console.log("Server running on localhost:3333");
});
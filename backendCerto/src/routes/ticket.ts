import express , {Request, Response, Router } from 'express';
import TicketController from '../controllers/TicketController';
import { validateCreate, validateUpdate } from '../middlewares/ticketMiddleware';
const route: Router = express.Router()

route
    .post('/create', validateCreate, TicketController.create)
    .get('/show',  TicketController.show)
    .get('/show/:id', TicketController.showById)
    .put('/update/:id', validateUpdate, TicketController.update)
    .delete('/delete/:id', TicketController.delete)

route.patch('/start/:id', TicketController.start)
route.patch('/finish/:id', TicketController.finish)

export default route
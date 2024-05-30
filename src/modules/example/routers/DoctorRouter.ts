import express, { Request, Response } from 'express';
import DoctorService from '../services/DoctorService';
import DoctorController from '../controllers/DoctorController';
import DoctorRepository from '../repositories/DoctorRepository';

const doctorRouter = express.Router();
const doctorRepository = new DoctorRepository();
const doctorService = new DoctorService(doctorRepository);
const doctorController = new DoctorController(doctorService);

// GET /doctors
doctorRouter.get('/', doctorController.findAll);

// POST /doctors
doctorRouter.post('/', doctorController.post);

// GET /doctors/:id
doctorRouter.get('/:id', (req: Request, res: Response) => {
  // Your code here
});

// PUT /doctors/:id
doctorRouter.put('/:id', (req: Request, res: Response) => {
  // Your code here
});

// DELETE /doctors/:id
doctorRouter.delete('/:id', (req: Request, res: Response) => {
  // Your code here
});

export default doctorRouter;
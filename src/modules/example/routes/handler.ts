import { IncomingMessage, ServerResponse } from "http"
import DoctorController from '../controllers/DoctorController';
import DoctorService from "../services/DoctorService";
import DoctorRepository from "../repositories/DoctorRepository";

const doctorService = new DoctorService(new DoctorRepository);
const doctorController = new DoctorController(doctorService);

interface Req extends IncomingMessage {
    id: string;
}

export const getHandler = (request: IncomingMessage, response: ServerResponse) => {
  const doctors = doctorController.getDoctors();

  response.writeHead(200, {
    'Content-Type': 'application/json'
  });
  response.write(JSON.stringify({
    message: 'success get doctors',
    data: doctors
  }));
  response.end()
}

export const getByIdHandler = (request: Req, response: ServerResponse) => {
  const doctor = doctorController.getDoctorById(+request.id);

  response.writeHead(200, {
    'Content-Type': 'application/json'
  });
  response.write(JSON.stringify({
    message: 'success get doctor',
    data: doctor
  }));
  response.end()
}
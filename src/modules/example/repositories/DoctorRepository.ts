import DoctorInterface from "../interfaces/DoctorInterface";
import DoctorModel from "../data-accesses/models/DoctorModel";
import {DoctorDTO} from '../dto/DoctorDTO';

class DoctorRepository implements DoctorInterface {
  getDoctors() {
    const doctors = new DoctorModel;

    return doctors.findAllDoctors();
  }

  getDoctorById(id: number): DoctorDTO | null {
    const doctors = new DoctorModel;

    return doctors.findDoctorById(id);
  }
}

export default DoctorRepository;
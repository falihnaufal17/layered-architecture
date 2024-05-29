import { DoctorDTO } from "../../dto/DoctorDTO";
import DoctorDummy from "../dummies/DoctorDummy";

class DoctorModel {
  private doctorData = DoctorDummy;

  findAllDoctors() {
    return this.doctorData;
  }

  findDoctorById(id: number): DoctorDTO | null {
    const doctor = this.doctorData.find(doctor => doctor.id === id);

    return doctor || null;
  }
}

export default DoctorModel;
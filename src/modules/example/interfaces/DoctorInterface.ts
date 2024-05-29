import { DoctorDTO } from "../dto/DoctorDTO";

interface DoctorInterface {
  getDoctors(): DoctorDTO[];
  getDoctorById(id: number): DoctorDTO | null;
}

export default DoctorInterface;

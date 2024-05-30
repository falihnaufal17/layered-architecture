import { DoctorDTO } from "../dto/DoctorDTO";

interface DoctorInterface {
  findAll(): Promise<DoctorDTO[]>;
  findById(id: number): Promise<DoctorDTO | null>;
  post(doctor: DoctorDTO): Promise<DoctorDTO>;
}

export default DoctorInterface;

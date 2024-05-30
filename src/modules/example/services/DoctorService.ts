import { DoctorDTO } from "../dto/DoctorDTO";
import DoctorInterface from "../interfaces/DoctorInterface";
import DoctorRepository from "../repositories/DoctorRepository";

class DoctorService implements DoctorInterface {
  private doctorRepository: DoctorRepository;

  constructor(doctorRepository: DoctorRepository) {
    this.doctorRepository = doctorRepository;
  }
  
  public async findAll() {
    return this.doctorRepository.findAll();
  }

  public async findById(id: number) {
    return this.doctorRepository.findById(id);
  }

  public async post(doctor: DoctorDTO) {
    return this.doctorRepository.post(doctor);
  }
}
export default DoctorService;
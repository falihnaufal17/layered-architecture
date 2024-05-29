import DoctorInterface from "../interfaces/DoctorInterface";

class DoctorService implements DoctorInterface {
  private doctorRepository: DoctorInterface;

  constructor(doctorRepository: DoctorInterface) {
    this.doctorRepository = doctorRepository;
  }
  
  public getDoctors() {
    return this.doctorRepository.getDoctors();
  }

  public getDoctorById(id: number) {
    return this.doctorRepository.getDoctorById(id);
  }
}
export default DoctorService;
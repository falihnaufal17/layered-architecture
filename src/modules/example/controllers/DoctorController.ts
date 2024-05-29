import DoctorService from '../services/DoctorService';

class DoctorController {
  private doctorService: DoctorService;

  constructor(doctorService: DoctorService) {
    this.doctorService = doctorService;
  }

  getDoctors() {
    return this.doctorService.getDoctors();
  }

  getDoctorById(id: number) {
    return this.doctorService.getDoctorById(id);
  }
}

export default DoctorController;
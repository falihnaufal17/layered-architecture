import DoctorInterface from "../interfaces/DoctorInterface";
import DoctorModel from "../data-accesses/models/DoctorModel";
import {DoctorDTO} from '../dto/DoctorDTO';

class DoctorRepository implements DoctorInterface {
  private doctors: DoctorModel[];

  constructor() {
    this.doctors = [];
  }

  public async findAll(): Promise<DoctorDTO[]> {
    try {
      return this.doctors.map(doctor => {
        return {
          id: doctor.id,
          name: doctor.name,
          specialty: doctor.specialty
        };
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async findById(id: number): Promise<DoctorDTO | null> {
    try {
      const doctor = this.doctors.find(doctor => doctor.id === id);
      if (!doctor) {
        return null;
      }
  
      return {
        id: doctor.id,
        name: doctor.name,
        specialty: doctor.specialty
      };
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async post(doctor: DoctorDTO): Promise<DoctorDTO> {
    try {
      const newDoctor = new DoctorModel();
      newDoctor.id = this.doctors.length + 1;
      newDoctor.name = doctor.name;
      newDoctor.specialty = doctor.specialty;
  
      this.doctors.push(newDoctor);
  
      return {
        id: newDoctor.id,
        name: newDoctor.name,
        specialty: newDoctor.specialty
      };
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

export default DoctorRepository;
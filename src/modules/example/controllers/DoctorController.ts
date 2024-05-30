import { DoctorDTO } from '../dto/DoctorDTO';
import DoctorService from '../services/DoctorService';
import { Request, Response } from 'express';
class DoctorController {
  private doctorService: DoctorService;

  constructor(doctorService: DoctorService) {
    this.doctorService = doctorService;
  }

  public findAll = async (req: Request, res: Response) => {
    try {
      const data = await this.doctorService.findAll()
  
      return res.json({
        message: 'Success get all data',
        data
      });
    } catch (error: any) {
      return res.json({
        message: error.message
      })
    }
  }

  public findById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    try {
      const data = await this.doctorService.findById(id);
  
      return res.json({
        message: 'Success get data by id',
        data
      });
    } catch (error: any) {
      return res.json({
        message: error.message
      })
    }
  }

  public post = async (req: Request, res: Response) => {
    const doctor: DoctorDTO = req.body;

    try {
      const data = await this.doctorService.post(doctor);
  
      return res.json({
        message: 'Success post data',
        data
      });
    } catch (error: any) {
      return res.json({
        message: error.message
      })
    }
  }
}

export default DoctorController;
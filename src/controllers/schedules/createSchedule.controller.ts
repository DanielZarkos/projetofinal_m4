import { Request, Response } from "express";
import createScheduleService from "../../services/mother/createMother.service";

const createScheduleController = async (req: Request, res: Response) => {
    const schedule = req.body;

    const newSchedule = await createMotherService(schedule);

    return res.status(201).json(newSchedule);
};
export default createScheduleController;

import { Request, Response } from "express";
import listSchedule from "../../services/schedule/listSchedule.service";

const listScheduleController = async (req: Request, res: Response) => {
    const id: string = req.params.id;

    const mother = await listScheduleService(id);

    return res.status(200).json(mother);
};

export default listScheduleController;

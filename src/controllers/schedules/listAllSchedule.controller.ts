import { Request, Response } from "express";
import listAllScheduleService from "";

const listAllScheduleService = async (req: Request, res: Response) => {
    const allSchedules = await listAllScheduleService();
    return res.status(200).json(allSchedules);
};

export default listAllScheduleService;

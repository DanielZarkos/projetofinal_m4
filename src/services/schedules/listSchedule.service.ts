import { AppError } from "../../errors/AppError";
import AppDataSource from "../../data-source";
import { Schedules } from "../../entities/Schedules.entity";
import { IScheduleRequest } from "../../interfaces/schedules";
import { instanceToInstance } from "class-transformer";

const listScheduleService = async (id: string) => {
    const scheduleRepository = AppDataSource.getRepository(Schedule);

    const mother = await scheduleRepository.find({
        where: { id: id },
        relations: { childrens: true, schedulesMother: true },
    });

    // if(!mother){ throw new AppError(400, 'User Not found')};

    return mother;
};

export default listScheduleService;

import AppDataSource from "../../data-source";
import { Schedule as allSchedule } from "../../entities/Schedules.entity";
import { IScheduleRequest } from "../../interfaces/schedules";

const listMothersService = async (): Promise<ISchedule[]> => {
    const scheduleRepository = AppDataSource.getRepository(schedules);

    const allSchedules = await scheduleRepository.find();

    return allSchedules;
};

export default listMothersService;

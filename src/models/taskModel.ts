import type { TaskStateModel } from "./taskStateModel";

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null; //Quando timer chega ao final
  interruptDate: number | null; // Quando a task for interrompida
  type: keyof TaskStateModel["config"];
};

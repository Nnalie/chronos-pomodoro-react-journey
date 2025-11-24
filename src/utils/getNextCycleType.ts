import type { TaskModel } from "../models/taskModel";

export function getNextCycleType(currentCycle: number): TaskModel["type"] {
  return currentCycle % 8 === 0
    ? "longBreakTime"
    : currentCycle % 2 === 0
    ? "shortBreakTime"
    : "workTime";
}

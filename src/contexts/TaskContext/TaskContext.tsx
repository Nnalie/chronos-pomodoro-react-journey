import { createContext } from "react";
import type { TaskStateModel } from "../../models/taskStateModel";
import { initialTaskState } from "./InitialTaskState";

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialTaskContextProps = {
  state: initialTaskState,
  setState: () => {},
};

export const TaskContext = createContext<TaskContextProps>(
  initialTaskContextProps
);

import { createContext } from "react";
import type { TaskStateModel } from "../../models/taskStateModel";
import { initialTaskState } from "./InitialTaskState";
import type { TaskActionModel } from "./TaskActions";

type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};

const initialTaskContextProps = {
  state: initialTaskState,
  dispatch: () => {},
};

export const TaskContext = createContext<TaskContextProps>(
  initialTaskContextProps
);

import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { patch, updateItem } from '@ngxs/store/operators';
import { Task } from '../models/task.model';

// Defines the actions available to the app
export const actions = {
  ARCHIVE_TASK: 'ARCHIVE_TASK',
  PIN_TASK: 'PIN_TASK',
  APP_ERROR: 'APP_ERROR',
};

export class ArchiveTask {
  static readonly type = actions.ARCHIVE_TASK;

  constructor(public payload: string) {}
}

export class PinTask {
  static readonly type = actions.PIN_TASK;

  constructor(public payload: string) {}
}

export class AppError {
  static readonly type = actions.APP_ERROR;

  constructor(public payload: boolean) {}
}

// The initial state of our store when the app loads.
// Usually you would fetch this from a server
const defaultTasks = [
  { id: '1', title: 'Something', state: 'TASK_INBOX' },
  { id: '2', title: 'Something more', state: 'TASK_INBOX' },
  { id: '3', title: 'Something else', state: 'TASK_INBOX' },
  { id: '4', title: 'Something again', state: 'TASK_INBOX' },
];

export interface TaskStateModel {
  tasks: Task[];
  status: 'idle' | 'loading' | 'success' | 'error';
  error: boolean;
}

// Sets the default state
@State<TaskStateModel>({
  name: 'taskbox',
  defaults: {
    tasks: defaultTasks,
    status: 'idle',
    error: false,
  },
})
@Injectable()
export class TaskState {
  // Defines a new selector for the error field
  @Selector()
  static error(state: TaskStateModel): boolean {
    return state.error;
  }

  @Selector()
  static tasks(state: TaskStateModel): Task[] {
    return state.tasks;
  }

  @Action(PinTask)
  pinTask(
    { getState, setState }: StateContext<TaskStateModel>,
    { payload }: PinTask
  ) {
    const task = getState().tasks.find((task) => task.id === payload);

    if (task) {
      const updatedTask: Task = {
        ...task,
        state: 'TASK_PINNED',
      };

      setState(
        patch({
          tasks: updateItem<Task>(
            (pinnedTask) => pinnedTask?.id === payload,
            updatedTask
          ),
        })
      );
    }
  }

  @Action(ArchiveTask)
  archiveTask(
    { getState, setState }: StateContext<TaskStateModel>,
    { payload }: ArchiveTask
  ) {
    const task = getState().tasks.find((task) => task.id === payload);

    if (task) {
      const updatedTask: Task = {
        ...task,
        state: 'TASK_ARCHIVED',
      };

      setState(
        patch({
          tasks: updateItem<Task>(
            (archivedTask) => archivedTask?.id === payload,
            updatedTask
          ),
        })
      );
    }
  }

  @Action(AppError)
  setAppError(
    { patchState }: StateContext<TaskStateModel>,
    { payload }: AppError
  ) {
    patchState({
      error: payload,
    });
  }
}

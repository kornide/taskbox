import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Task } from '../../../models/task.model';
import { ArchiveTask, PinTask, TaskState } from '../../../state/task.state';

@Component({
  selector: 'app-task-list-wrapper',
  templateUrl: './task-list-wrapper.component.html',
  styleUrls: ['./task-list-wrapper.component.css'],
})
export class TaskListWrapperComponent {
  @Select(TaskState.tasks) tasks$: Observable<Task[]>;

  constructor(private store: Store) {}

  archiveTask(id: string) {
    this.store.dispatch(new ArchiveTask(id));
  }

  pinTask(id: string) {
    this.store.dispatch(new PinTask(id));
  }
}

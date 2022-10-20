import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task: Task;

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onPinTask = new EventEmitter<string>();

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onArchiveTask = new EventEmitter<string>();

  onPin(id: string) {
    this.onPinTask.emit(id);
  }

  onArchive(id: string) {
    this.onArchiveTask.emit(id);
  }
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { TaskState } from '../../state/task.state';
import { TaskListWrapperComponent } from './task-list-wrapper/task-list-wrapper.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [TaskComponent, TaskListWrapperComponent, TaskListComponent],
  imports: [CommonModule, NgxsModule.forFeature([TaskState])],
  exports: [TaskComponent, TaskListWrapperComponent],
})
export class TaskModule {}

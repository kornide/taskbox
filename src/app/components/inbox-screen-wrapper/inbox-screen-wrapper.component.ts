import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TaskState } from '../../state/task.state';

@Component({
  selector: 'app-inbox-screen-wrapper',
  templateUrl: './inbox-screen-wrapper.component.html',
  styleUrls: ['./inbox-screen-wrapper.component.css'],
})
export class InboxScreenWrapperComponent {
  @Select(TaskState.error) error$: Observable<boolean>;
}

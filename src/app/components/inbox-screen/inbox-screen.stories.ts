import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { fireEvent, within } from '@storybook/testing-library';
import { TaskState } from '../../state/task.state';
import { TaskModule } from '../task/task.module';
import { InboxScreenComponent } from './inbox-screen.component';

export default {
  component: InboxScreenComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TaskModule, NgxsModule.forRoot([TaskState])],
    }),
  ],
  title: 'InboxScreen',
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: true,
};

export const WithInteractions = Template.bind({});
WithInteractions.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Simulates pinning the first task
  await fireEvent.click(canvas.getByLabelText('pinTask-1'));
  // Simulates pinning the third task
  await fireEvent.click(canvas.getByLabelText('pinTask-3'));
};

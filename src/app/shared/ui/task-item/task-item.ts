import { Component, input, output } from '@angular/core';
import { Task } from '../../../features/tareas/task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem {
  task = input.required<Task>();

  toggled = output<number>();
  removed = output<number>();
}

import { Component, output } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  agregado = output<string>();

  agregar(input: HTMLInputElement): void {
    this.agregado.emit(input.value);
    input.value = '';
  }
}

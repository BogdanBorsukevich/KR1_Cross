import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input-form.component.html',
})
export class InputFormComponent {
  @Output() valueChanged = new EventEmitter<string>();

  form = new FormGroup({
    base: new FormControl('')
  });

  submit() {
    if (this.form.valid) {
      this.valueChanged.emit(this.form.value.base || '');
    }
  }
}

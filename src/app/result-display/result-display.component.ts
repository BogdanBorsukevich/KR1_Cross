import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result-display',
  standalone: true,
  imports: [CommonModule],
  template: `<p *ngIf="result">Згенероване ім’я: <strong>{{ result }}</strong></p>`
})
export class ResultDisplayComponent {
  @Input() result = '';
}

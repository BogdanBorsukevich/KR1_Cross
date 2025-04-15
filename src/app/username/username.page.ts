import { Component } from '@angular/core';
import { InputFormComponent } from '../input-form/input-form.component';
import { ResultDisplayComponent } from '../result-display/result-display.component';
import { UsernameService } from './username.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-username-page',
  templateUrl: './username.page.html',
  styleUrls: ['./username.page.scss'],
  standalone: true,
  imports: [InputFormComponent, ResultDisplayComponent, CommonModule]
})
export class UsernamePage {
  generatedName: string = '';
  constructor(private nameService: UsernameService) {}

  onNameBaseReceived(base: string) {
    this.generatedName = this.nameService.generateUsername(base);
  }
}

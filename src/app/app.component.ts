import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  label = 'write something in the input field to change this label'
  input = ''

  onInputChange(value: any) {
    this.label = value
  }
}

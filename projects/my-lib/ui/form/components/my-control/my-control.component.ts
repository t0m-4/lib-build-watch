import { Component, Input } from '@angular/core';
import { EFormType } from '../../models/form-type.model';

@Component({
  selector: 'lib-my-control',
  templateUrl: './my-control.component.html',
  styleUrls: ['./my-control.component.css']
})
export class MyControlComponent {
  @Input() formType: EFormType = EFormType.Simple;
  eFormType = EFormType;
}

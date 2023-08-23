import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormModuleConfiguration } from './form.module-config';
import { MyControlComponent } from './components/my-control/my-control.component';

@NgModule({
  declarations: [
    MyControlComponent
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [MyControlComponent],
})
export class FormModule {
  static forRoot(config: FormModuleConfiguration): ModuleWithProviders<FormModule> {
    return {
      ngModule: FormModule,
      providers: [{ provide: FormModuleConfiguration, useValue: config }],
    };
  }
}

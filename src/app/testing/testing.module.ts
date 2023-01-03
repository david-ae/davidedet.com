import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TestComponent } from './test.component';
import { NgxFlagPickerModule } from 'ngx-flag-picker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Ng2TelInputModule } from 'ng2-tel-input';

@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    NgxFlagPickerModule,
    Ng2TelInputModule,
    MatFormFieldModule,
    RouterModule.forChild([
      { path: 'test', component: TestComponent }
    ])
  ]
})
export class TestingModule { }

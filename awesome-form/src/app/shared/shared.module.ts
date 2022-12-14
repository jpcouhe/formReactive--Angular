import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule, MatRadioModule,MatFormFieldModule,
    MatInputModule,],
  exports: [ReactiveFormsModule, MatRadioModule,MatFormFieldModule,
    MatInputModule],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { AddNotePage } from './add-note';

@NgModule({
  declarations: [
    AddNotePage,
  ],
  imports: [
    IonicPageModule.forChild(AddNotePage),
  ],
})
export class AddNotePageModule {}

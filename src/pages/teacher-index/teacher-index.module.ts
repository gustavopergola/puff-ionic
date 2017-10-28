import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherIndexPage } from './teacher-index';

@NgModule({
  declarations: [
    TeacherIndexPage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherIndexPage),
  ],
})
export class TeacherIndexPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherPage } from './teacher';

@NgModule({
  declarations: [
    TeacherPage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherPage),
  ],
})
export class TeacherPageModule {}

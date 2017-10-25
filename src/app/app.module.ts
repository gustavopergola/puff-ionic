import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { DashboardPage }from '../pages/dashboard/dashboard';
import { UsuarioService } from '../domain/usuario/usuario-service';
import { RegisterPage } from '../pages/register/register';
import { TeacherPage } from '../pages/teacher/teacher';
import { ShowteacherPage } from '../pages/showteacher/showteacher';
import { RatingPage } from '../pages/rating/rating';
import { CommentsPage } from '../pages/comments/comments';  
import { SettingPage } from '../pages/setting/setting';
import { StatsPage } from '../pages/stats/stats';
// import { TeacherIndexPage } from '..pages/teacher-index/teacher-index';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HttpModule} from '@angular/http';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { TeacherService } from '../domain/teacher/teacher-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    DashboardPage,
    RegisterPage,
    TeacherPage,
    ShowteacherPage,
    RatingPage,
    CommentsPage,
    SettingPage,
    StatsPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    DashboardPage,
    RegisterPage, 
    TeacherPage,
    ShowteacherPage,
    RatingPage,
    CommentsPage,
    SettingPage,
    StatsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioService,
    TeacherService,
    AuthServiceProvider
  ]
})
export class AppModule {}

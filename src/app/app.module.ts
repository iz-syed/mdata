import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { Signup } from '../pages/signup/signup';
import { Login } from '../pages/login/login';
import { ForgotPassword } from '../pages/forgot-password/forgot-password';
import { Intro } from '../pages/intro/intro';

@NgModule({
  declarations: [
    MyApp,
    Home,
    Signup,
    Login,
    ForgotPassword,
    Intro
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Signup,
    Login,
    ForgotPassword,
    Intro
  ],
  providers: []
})
export class AppModule {}

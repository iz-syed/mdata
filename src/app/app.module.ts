import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { Signup } from '../pages/signup/signup';
import { Login } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    Home,
    Signup,
    Login
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Signup,
    Login
  ],
  providers: []
})
export class AppModule {}

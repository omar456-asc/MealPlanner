import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './auth/components/log-in/log-in.component';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  {path:'/', component:HomeModule},
    {path:'/log-in', component:LogInComponent},
    {path: '/sign-up', component: SignUpComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

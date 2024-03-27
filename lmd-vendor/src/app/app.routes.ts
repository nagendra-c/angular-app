import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'signup',
        component:SignupComponent
    },
    {
        path:'signin',
        component:SigninComponent
    },
    {
        path:'contact-us',
        component:ContactUsComponent
    }
    
];

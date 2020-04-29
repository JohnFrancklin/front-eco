import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },

  // Les restents redirigent a home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

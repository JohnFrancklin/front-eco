import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PanierComponent } from './components/panier/panier.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { ProduitsComponent } from './components/dashbord/produits/produits.component';
import { DetailComponent } from './components/detail/detail.component';
import { UsersComponent } from './components/dashbord/users/users.component';
import { CommandesComponent } from './components/dashbord/commandes/commandes.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'dashboard/produits', component: ProduitsComponent },
  { path: 'dashboard/users', component: UsersComponent },
  { path: 'dashboard/commandes', component: CommandesComponent },
  { path: 'detail/:id', component: DetailComponent },


  // Les restents redirigent a home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

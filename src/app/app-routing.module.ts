import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DetalleComponent } from './detalle/detalle.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path:'home' , component: HomeComponent },
  {path:'catalogo' , component: CatalogoComponent },
  {path:'detalle/:id' , component: DetalleComponent },
  {path:'login' , component: LoginComponent },
  {path:'registro' , component: RegistroComponent },
  {path:'**' , pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

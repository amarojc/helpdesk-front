import { TecnicoUpdateComponent } from './components/tecnico/tecnico-update/tecnico-update.component';
import { TecnicoCreateComponent } from './components/tecnico/tecnico-create/tecnico-create.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { TecnicoListComponent } from './components/tecnico/tecnico-list/tecnico-list.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Implento o caminho das minhas rotas
//NAVComponent -> componente pai
//Demais componenetes são filhas de NAV.
//canActivate permite o acesso as rotas filhas caso o login seja autorizado.
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: NavComponent, canActivate: [AuthGuard],
      children: 
      [
        {path: 'home', component: HomeComponent},
        {path: 'tecnicos', component: TecnicoListComponent},
        {path: 'tecnicos/create', component: TecnicoCreateComponent},
        {path: 'tecnicos/update/:id', component: TecnicoUpdateComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Implento o caminho das minhas rotas
//NAVComponent -> componente pai
//Demais componenetes são filhas de NAV.
const routes: Routes = [
  {
    path: '', component: NavComponent, 
      children: 
      [
        {path: 'home', component: HomeComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

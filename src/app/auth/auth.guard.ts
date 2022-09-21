import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){}

  //state -> return boolean, possou ou não acessar o recurso?
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let authenticated = this.authService.isAuthenticated();
    //Validar se authenticated validado retorna true senão redireciona para o endpoint de login
    //Utilizando o router para navegar entre as rotas.
    if(authenticated){
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }
  }
 
}

import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  //Utilizado quando um componente for construido
  //Router permite navegar entre os componentes
  //Inicializa o projeto na página home
  constructor(
    private router: Router, 
    private toast: ToastrService,
    private service: AuthService) { }

  //Construtor utilizado sempre que precisar inicializar o componente.
  //Ou renderizar outro componente na tela.
  ngOnInit(): void {
    //Navegar para home apartir do ponte em que se encontra
    this.router.navigate(['tecnicos/create'])
  }
  
 
  logout(){
      this.service.logout(),
      this.router.navigate(['login']),
      this.toast.info('Logout realizado com sucesso!', 'Logout', {timeOut: 8000});
  }

}

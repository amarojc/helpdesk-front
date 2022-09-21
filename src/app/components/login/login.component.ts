import { Credenciais } from './../../models/credenciais';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Variável do cred do tipo Credenciais, com atributos email e senha
  creds: Credenciais = {
    email: '',
    senha: ''
  }

  //Valida se o valor digitado da variável está no formato de email.
  email = new FormControl(null, Validators.email);
  //Valida se o valor digitado é maior que 3 caracteres, caso menor fica invalida.
  senha = new FormControl(null, Validators.minLength(3));
    
  constructor(private toast: ToastrService) { }

  ngOnInit(): void {
  }

  logar(){
    this.toast.error('Usuário e/ou senha inválidos','Login');
    this.creds.senha = '';
  }

  validaCampos(): boolean{
    if(this.email.valid && this.senha.valid){
      return true;
    }else{
      return false;
    }
  }
}

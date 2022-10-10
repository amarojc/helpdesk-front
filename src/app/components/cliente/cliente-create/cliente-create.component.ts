import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from './../../../models/cliente';
import { ClienteService } from './../../../services/cliente.service';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cliente: Cliente ={
    id:          '',
    nome:        '',
    cpf:         '',
    email:       '',
    senha:       '',
    perfis:      [],
    dataCriacao:  ''
  }

  hide: any;
  nome: FormControl = new FormControl(null, Validators.minLength(3));
  cpf: FormControl = new FormControl(null, Validators.required);
  email: FormControl = new FormControl(null, Validators.email);
  senha: FormControl = new FormControl(null, Validators.minLength(3));

  constructor(
    private service: ClienteService,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  create(): void{
    this.service.create(this.cliente).subscribe(() => {
      this.toast.success('Cliente cadastrado com sucesso!', 'Cadastro');
      this.router.navigate(['clientes']);
    }, ex => {
      //Primeiro é verificado se consta um array de erros, após se existe apenas um erro.
      if(ex.error.erros){
        ex.error.erros.forEach(element => {
          this.toast.error(element.message);
        });
      }else{
        this.toast.error(ex.error.message);
      }
    });
  }
  
  addPerfil(perfil: any): void{
    //Verificar se já foi adicionado
    if(this.cliente.perfis.includes(perfil)){
      //Caso encontre o perfil no array ele será removido.
      this.cliente.perfis.splice(this.cliente.perfis.indexOf(perfil), 1);
    }else{
      //Caso não encontre o perfil ele será adicionado.
      this.cliente.perfis.push(perfil);
    }
  }

  validaCampos(): boolean{
    return this.nome.valid
          &&  this.cpf.valid
          && this.email.valid
          && this.senha.valid
  }

}

export class FormFieldPrefixSuffix{
  hide = true;
}

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tecnico } from './../../../models/tecnico';
import { TecnicoService } from './../../../services/tecnico.service';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.css']
})
export class TecnicoCreateComponent implements OnInit {
  tecnico: Tecnico ={
    id:          '',
    nome:        '',
    cpf:         '',
    email:       '',
    senha:       '',
    perfis:      [],
    dataCriacao: ''
  }

  hide: any;
  nome: FormControl = new FormControl(null, Validators.minLength(3));
  cpf: FormControl = new FormControl(null, Validators.required);
  email: FormControl = new FormControl(null, Validators.email);
  senha: FormControl = new FormControl(null, Validators.minLength(3));

  constructor(
    private service: TecnicoService,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {}
  
  create(): void{
    this.service.create(this.tecnico).subscribe(() => {
        this.toast.success('Técnico cadastrado com sucesso', 'Cadastro');
        this.router.navigate(['tecnicos']);
      }, ex => {
        console.log(ex);
        
        //Primeiro verificar se existe um array de errors e após se existe apenas 1 error.
        if(ex.error.erros){
          ex.error.erros.forEach(element => {
            this.toast.error(element.message);
          });
        }else{
          this.toast.error(ex.error.message);
        }
      })
    }
    
  addPerfil(perfil: any): void{
    //Verifica se perfil já foi adicionado
    if(this.tecnico.perfis.includes(perfil)){
      //Quando encontrar o perfil como parametro ele será removido do array de perfis.
      //1 representa o primeiro caso.
      this.tecnico.perfis.splice(this.tecnico.perfis.indexOf(perfil), 1);
    }else{
      this.tecnico.perfis.push(perfil);
    }
  }   
  
  validaCampos(): boolean{
    return this.nome.valid 
           && this.cpf.valid
           && this.email.valid
           && this.senha.valid
  }

}

export class FormFieldPrefixSuffix {
  hide = true;
}

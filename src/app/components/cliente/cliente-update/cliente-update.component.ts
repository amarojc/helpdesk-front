import { FormControl, Validators } from '@angular/forms';
import { Cliente } from './../../../models/cliente';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from './../../../services/cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

  cliente: Cliente={
    id:           '',
    nome:         '',
    cpf:          '',
    email:        '',
    senha:        '',
    perfis:       [],
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
    private router: Router,
    private actRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cliente.id = this.actRouter.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void{
    this.service.findById(this.cliente.id).subscribe(resposta => {
      resposta.perfis = [];
      this.cliente = resposta;
    });
  }

  update(){
    this.service.update(this.cliente).subscribe(resposta => {
      this.toast.success('Cliente atualizado com sucesso!', 'Atualizar');
      this.router.navigate(['clientes']);
    }, ex => {
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
    if(this.cliente.perfis.includes(perfil)){
      this.cliente.perfis.splice(this.cliente.perfis.indexOf(perfil), 1);
    }else{
      this.cliente.perfis.push(perfil);
    }
  }

  validaCampos(): boolean{
    return this.nome.valid
           && this.cpf.valid
           && this.email.valid
           && this.senha.valid
  }

}
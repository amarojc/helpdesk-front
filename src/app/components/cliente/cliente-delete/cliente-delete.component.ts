import { Tecnico } from './../../../models/tecnico';
import { Cliente } from './../../../models/cliente';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from './../../../services/cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {
  cliente: Cliente={
    id:          '',
    nome:        '',
    cpf:         '',
    email:       '',
    senha:       '',
    perfis:      [],
    dataCriacao: ''   
  }

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

  findById(){
    this.service.findById(this.cliente.id).subscribe(resposta =>{
      this.cliente.perfis = [];
      this.cliente = resposta;
    })
  }

  delete(): void{
    this.service.delete(this.cliente.id).subscribe(resposta => {
      this.toast.success('Cliente excluído com sucesso!', 'Excluido');
      this.router.navigate(['clientes']);
    }, ex => {
      if(ex.error.erros){
        ex.error.erros.array.forEach(element => {
          this.toast.error(element.error);
        });
      }else{
        this.toast.error(ex.error.message);
      }
    })
  }
}

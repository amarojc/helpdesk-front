import { Router, ActivatedRoute } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { TecnicoService } from './../../../services/tecnico.service';
import { FormControl } from '@angular/forms';
import { Tecnico } from './../../../models/tecnico';
import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-tecnico-delete',
  templateUrl: './tecnico-delete.component.html',
  styleUrls: ['./tecnico-delete.component.css']
})
export class TecnicoDeleteComponent implements OnInit {
  tecnico: Tecnico = {
    id:          '',
    nome:        '',
    cpf:         '',
    email:       '',
    senha:       '',
    perfis:      [],
    dataCriacao: ''
  }

  constructor(
    private service: TecnicoService,
    private toast: ToastrService,
    private router : Router,
    private actRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.tecnico.id = this.actRouter.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void{
    this.service.findById(this.tecnico.id).subscribe(resposta =>{
      resposta.perfis = [];
      this.tecnico = resposta;
    })
  }

  delete(): void{
    this.service.delete(this.tecnico.id).subscribe(resposta => {
      this.toast.success('Técnico excluído com sucesso!', 'Excluir');
      this.router.navigate(['tecnicos']);
    }, ex => {
        //Primeiro verifico se existe um array dde erros e após se consta apenas um erro.
        if(ex.error.erros){
          ex.error.erros.forEach(element => {
            this.toast.error(element.message);          
          });
        }else{
          this.toast.error(ex.error.message);
        } 
    });
  }
}

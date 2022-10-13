import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ChamadoService } from './../../../services/chamado.service';
import { Chamado } from './../../../models/chamado';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chamado-create',
  templateUrl: './chamado-create.component.html',
  styleUrls: ['./chamado-create.component.css']
})
export class ChamadoCreateComponent implements OnInit {

  chamado: Chamado = {
    id:               '',
    dataAbertura:     '',
    dataFechamento:   '',
    prioridade:       '',
    status:           '',
    titulo:           '',
    descricao:        '',
    tecnico:          '',
    cliente:          '',
    nomeCliente:      '',
    nomeTecnico:      ''
  }

    hide: any;
    titulo: FormControl = new FormControl(null, Validators.minLength(5));
    descricao:  FormControl = new FormControl(null, Validators.maxLength(255));
    tecnico:    FormControl = new FormControl(null, Validators.required);
    cliente:    FormControl = new FormControl(null, Validators.required);
    prioridade:     FormControl = new FormControl(null, Validators.required);
    status:         FormControl = new FormControl(null, Validators.required);
    
  constructor(
    private service: ChamadoService,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  /*
  findById(id: any): Chamado{
    
  }
  */

  validaCampos(): boolean{
    return  this.titulo.valid
            && this.descricao.valid
            && this.tecnico.valid
            && this.prioridade.valid
            && this.status.valid
    }
}

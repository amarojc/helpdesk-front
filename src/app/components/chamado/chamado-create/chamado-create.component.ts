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
}

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

  constructor() { }

  ngOnInit(): void {
  }

}

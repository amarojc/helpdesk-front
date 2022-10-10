import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Chamado } from './../../../models/chamado';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chamado-list',
  templateUrl: './chamado-list.component.html',
  styleUrls: ['./chamado-list.component.css']
})
export class ChamadoListComponent implements OnInit {
  ELEMENT_DATA: Chamado [] = [{
      id:                           1,
      dataAbertura:      '10/10/2022',
      dataFechamento:     '10/10/2021',
      prioridade:              'ALTA',
      status:             'ANDAMENTO',
      titulo:             'Chamado 1',
      descricao:    'teste chamado 1',
      tecnico:                      1,
      cliente:                      6,
      nomeCliente:    'Stuart Littler',
      nomeTecnico:      'Jorge Amaro',
    }
  ]

  displayedColumns: string[] = ['position', 'titulo', 'cliente', 'tecnico', 'dataAbertura', 'prioridade', 'status', 'acoes'];
  dataSource = new MatTableDataSource<Chamado>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(

  ) { }

  ngOnInit(): void {
  }

  finAll(){

  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }
}

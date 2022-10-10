import { ChamadoService } from './../../../services/chamado.service';
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
  ELEMENT_DATA: Chamado [] = [];
  FILTERED_DATA: Chamado[] = [];

  displayedColumns: string[] = ['position', 'titulo', 'cliente', 'tecnico', 'dataAbertura', 'prioridade', 'status', 'acoes'];
  dataSource = new MatTableDataSource<Chamado>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private service: ChamadoService
  ) { }

  ngOnInit(): void {
    this.finAll();
  }

  finAll(): void{
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Chamado>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  retornaPrioridade(prioridade: any): string{
    return (prioridade == '0' ? 'BAIXA' : prioridade == '1' ? 'MÉDIA' : 'ALTA');
  }
 
  retornaStatus(status: any): string{
    return (status == '0' ? 'ABERTO' : status == '1' ? 'EM ANDAMENTO' : 'ENCERRADO');
  }

  orderByStatus(status: any): void{
    let list: Chamado[] = [];
    this.ELEMENT_DATA.forEach(element => {
      if (element.status == status)
        list.push(element)
    });
      this.FILTERED_DATA = list;
      this.dataSource = new MatTableDataSource<Chamado>(list);
      this.dataSource.paginator = this.paginator;
  }

  allStatus(): void{
    this.FILTERED_DATA = [];
    this.finAll();
  }
}

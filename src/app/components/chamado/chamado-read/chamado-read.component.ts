
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Chamado } from './../../../models/chamado';
import { ChamadoService } from './../../../services/chamado.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chamado-read',
  templateUrl: './chamado-read.component.html',
  styleUrls: ['./chamado-read.component.css']
})
export class ChamadoReadComponent implements OnInit {
  chamado: Chamado ={
    prioridade:   '',
    status:       '',
    titulo:       '',
    observacoes:  '',
    tecnico:      '',
    cliente:      '',
    nomeTecnico:  '',
    nomeCliente:  ''    
  }
 
  constructor(
    private chamadoService: ChamadoService,
    private toastService: ToastrService,
    private actRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.chamado.id = this.actRouter.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void{
    this.chamadoService.findById(this.chamado.id).subscribe(resposta => {
        this.chamado = resposta;
        
    }, ex =>{
      this.toastService.error(ex.message);
    })
  }

 
  retornaStatus(status: any): string{
    return (status == '0' ? 'ABERTO' : status == '1' ? 'EM ANDAMENTO' : 'FECHADO');
  }

  retornaPrioridade(prioridade: any): string{
    return (prioridade == '0' ? 'BAIXA' : prioridade == '1' ? 'MÉDIA' : 'ALTA');
  }
}

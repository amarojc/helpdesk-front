import { TecnicoService } from './../../../services/tecnico.service';
import { ClienteService } from './../../../services/cliente.service';
import { Cliente } from './../../../models/cliente';
import { Tecnico } from './../../../models/tecnico';
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
    prioridade:       '',
    status:           '',
    titulo:           '',
    observacoes:      '',
    tecnico:          '',
    cliente:          '',
    nomeCliente:      '',
    nomeTecnico:      '',
  }

    clientes: Cliente [] = [];
    tecnicos: Tecnico [] = [];

    prioridade:   FormControl = new FormControl(null, Validators.required);
    status:       FormControl = new FormControl(null, Validators.required);
    titulo:       FormControl = new FormControl(null, Validators.required);
    observacoes:  FormControl = new FormControl(null, Validators.required);
    tecnico:      FormControl = new FormControl(null, Validators.required);
    cliente:      FormControl = new FormControl(null, Validators.required);

    
    
  constructor(
    private chamadoService: ChamadoService,
    private clienteService: ClienteService,
    private tecnicoService: TecnicoService,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.findAllClientes();
    this.findAllTecnicos();
  }

  create(): void{
    this.chamadoService.create(this.chamado).subscribe(() => {
        this.toast.success('Chamado criado com sucesso!', 'Novo chamado');
        this.router.navigate(['chamados']);
    }, ex => {
    
      console.log(ex.error.message);
      
      if(ex.error.erros){
        ex.error.erros.forEach(element => {
          this.toast.error(element.message);
        });
      }else{
        this.toast.error(ex.error.message);
      }
    })
  }

  findAllClientes(): void{
    this.clienteService.findAll().subscribe(resposta => {
      this.clientes = resposta;
    })
  }

  findAllTecnicos(): void{
    this.tecnicoService.findAll().subscribe(resposta => {
      this.tecnicos = resposta;
    })
  }

   validaCampos(): boolean{
    return   this.prioridade.valid
            && this.status.valid
            && this.titulo.valid 
            && this.observacoes.valid
            && this.tecnico.valid
            && this.cliente.valid
            
    }
}

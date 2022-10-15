import { Chamado } from './../../../models/chamado';
import { ChamadoService } from './../../../services/chamado.service';
import { Cliente } from './../../../models/cliente';
import { Tecnico } from './../../../models/tecnico';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from './../../../services/cliente.service';
import { TecnicoService } from './../../../services/tecnico.service';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chamado-update',
  templateUrl: './chamado-update.component.html',
  styleUrls: ['./chamado-update.component.css']
})
export class ChamadoUpdateComponent implements OnInit {

  chamado: Chamado = {
    prioridade:   '',
    status:       '',
    titulo:       '',
    observacoes:  '',
    tecnico:      '',
    cliente:      '',
    nomeTecnico:  '',
    nomeCliente:  ''    
  }

  tecnicos: Tecnico [] = [];
  clientes: Cliente [] = [];

  prioridade:  FormControl = new FormControl(null, Validators.required);
  status:      FormControl = new FormControl(null, Validators.required);
  titulo:      FormControl = new FormControl(null, Validators.required);
  observacoes: FormControl = new FormControl(null, Validators.required);
  tecnico:     FormControl = new FormControl(null, Validators.required);
  cliente:     FormControl = new FormControl(null, Validators.required);

  constructor(
    private tecnicoService: TecnicoService,
    private clienteService: ClienteService,
    private chamadoService: ChamadoService,
    private toast: ToastrService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.chamado.id = this.actRoute.snapshot.paramMap.get('id');
    this.findById();
    this.findAllTecnicos();
    this.findAllClientes();

  }

  findById(): void{
    this.chamadoService.findById(this.chamado.id).subscribe(resposta => {
      this.chamado = resposta;
    })
  }

  findUpdate(){
    this.chamadoService.update(this.chamado).subscribe(() => {
      this.toast.success('Chamado atualizado com sucesso!', 'Atualizar');
      this.router.navigate(['chamados'])
    }, ex => {
      if(ex.error.erros){
        ex.error.erros.forEach(element => {
          this.toast.error(element.message);
        });
      }else{
        this.toast.error(ex.error.message);
      }
    })
  }

  findAllTecnicos(): void{
     this.tecnicoService.findAll().subscribe(resposta => {
     this.tecnicos = resposta;
    }) 
  }

  findAllClientes(): void{
      this.clienteService.findAll().subscribe(resposta => {
      this.clientes = resposta;  
    })
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  //Ulizado quando um componente for construido
  constructor() { }

  //Construtor utilizado sempre que precisar inicializar o componente.
  //Ou renderizar outro componente na tela.
  ngOnInit(): void {
  }

}

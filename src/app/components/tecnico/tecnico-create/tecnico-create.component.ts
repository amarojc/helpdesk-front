import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.css']
})
export class TecnicoCreateComponent implements OnInit {
  hide: any;

  constructor() { }

  ngOnInit(): void {
  }

  create(){

  }
}

export class FormFieldPrefixSuffix {
  hide = true;
}

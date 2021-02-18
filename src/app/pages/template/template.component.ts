import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {


  usuario= {
    nombre: 'felipe',
    apellido: 'test',
    correo: 'felipe@test.cl'

  }

  constructor() { }

  ngOnInit(): void {
  }


  guardar( forma: NgForm){
Object.values( forma.controls).forEach(control =>{
  control.markAsTouched();
})
    console.log(forma.value);
  }
}

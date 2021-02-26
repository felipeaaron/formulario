import { HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

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

  paises: any[]= [];

  

  constructor( private PaisService: PaisService) { }

  ngOnInit(): void {

    this.PaisService.getPaises()
    .subscribe( paises => {
      this.paises = paises;


      this.paises.unshift({
        nombre: '[Seleccione Pais]',
        codigo: ''
      })



    });
  }


  guardar( forma: NgForm){
Object.values( forma.controls).forEach(control =>{
  control.markAsTouched();
})
    console.log(forma.value);
  }
}

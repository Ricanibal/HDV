import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  constructor() { }
  
  Perfil:string ="Soy estudiante de octavo semestre en la universidad del Tecnológico de Antioquia, me gusta trabajar en equipo,desarrollo aplicaciones web y móvil con Angularjs y Ionic, aunque tengo las habilidades de utilizar bootstrap me gusta hacer los diseños y maquetación por mi mismo.  "

  ngOnInit(): void {
  }

}

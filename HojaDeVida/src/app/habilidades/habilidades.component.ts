import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { estudio } from './estudio.model';
import { herramientas } from './herramientas.model';
@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  Animacion:string ="card"
  constructor() { }
  herra:herramientas[] = [
    new herramientas("Angular","Angular.png","CardAngular","",["Angular es un framework o entorno de trabajo que facilita mucho la creación, ya que se puede dividir por componentes ayudando a organizar mejor los proyectos","Esta página es un ejemplo de mis cualidades con Angular"]),
    new herramientas("Ionic","ionic.png","CardIonic","",["Ionic es una entorno de trabajo muy similar a Angular pero la utilizo sobretodo cuando trabajo para aplicativos moviles, en general he utilizado poco Ionic pero se lo basico para trabajar"]),
    new herramientas("React","React.png","CardReact","",["React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página"]),
];

  estu:estudio[] = [
    new estudio("Tecnologico de Antioquia","2019-2023","Ingeniería de Software","CIngeneria.png","Pregrado"),
    new estudio("Udemy Academy","2022","Angular","CAngular.jpg","Curso")
  ];

  Ani(Herramienta:herramientas)
  {
    Herramienta.Visible=true
    this.Animacion = Herramienta.Animacion;
  }
  Offani(Herramienta:herramientas)
  {
    Herramienta.Visible=false
  }

  ngOnInit(): void {
  }

}

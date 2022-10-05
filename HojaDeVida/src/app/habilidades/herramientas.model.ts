export class herramientas
{
     Nombre:string =""
     Img:string = "../assets/img/"
     Utilidad:string[] = []
     Link:string =""
     Animacion:string =""
     Visible:boolean = false
    constructor(nombre:string,img:string,animacion:string,link:string,utilidad:string[])
    {
        this.Nombre=nombre
        this.Img+=img
        this.Utilidad = utilidad
        this.Link = link
        this.Animacion = animacion
    }
}
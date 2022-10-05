export class estudio
{
    Institucion : string ="";
    Fecha : string ="";
    Habilidad:string ="";
    Tipo:string ="";
    Certificado:string ="/assets/img/";

    constructor(institucion:string,fecha:string,habilidad:string,certificado:string,tipo:string)
    {
        this.Institucion = institucion;
        this.Fecha = fecha;
        this.Habilidad = habilidad;
        this.Certificado += certificado;
        this.Tipo = tipo;
    }
}
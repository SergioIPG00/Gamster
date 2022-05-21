export class usario{
    id?: string;
    Email: string;
    Nombre: string;
    Apellidos: string;
    FechaNacimiento: Date;

    constructor(nombre: string, apellidos: string, fecha: Date, email: string){
        this.Nombre = nombre;
        this.Apellidos = apellidos;
        this.FechaNacimiento = fecha;
        this.Email = email;
    }

}
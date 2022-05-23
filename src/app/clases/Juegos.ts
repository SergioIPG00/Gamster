export class Juegos{
    id?: string ;
    Nombre: string;
    Compania: string;
    imagen: string;

    constructor(id: string, nombre: string, compania: string, imagen: string){
        this.id = id;
        this.Nombre = nombre;
        this.Compania = compania;
        this.imagen = imagen;
    }
            
}
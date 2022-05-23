import { usuario } from './datosUsuario';
export class Comentario{
    Id?: string;
    Comentario: string;
    Usuario: string;
    Juego: string;

    constructor(id: string, Comentario: string, Usuario: string, Juego: string){
        this.Id = id;
        this.Comentario = Comentario;
        this.Usuario = Usuario;
        this.Juego = Juego;

    }
}
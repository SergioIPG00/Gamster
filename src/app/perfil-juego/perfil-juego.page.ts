import { Component, OnInit } from '@angular/core';
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from '../../environments/configFirebase';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { Comentario } from './../clases/Comentario';
import { IonInfiniteScroll } from '@ionic/angular';
import { PasoDatosService } from '../services/paso-datos.service';
import { JuegoPage } from '../juego/juego.page';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-juego',
  templateUrl: './perfil-juego.page.html',
  styleUrls: ['./perfil-juego.page.scss'],
})
export class PerfilJuegoPage implements OnInit {

  app = initializeApp(firebaseConfig);
  db = getFirestore(this.app);
  comentario: Comentario[] = [];
  contenido: any;
  juego: any;
  user: any;
  id: string;
  Nombre: string;
  Apellidos: string;
  FechaNacimiento: string;
  Email: string;

  constructor(
    private PasoDatosService:PasoDatosService ,
    private menu: MenuController
  ) {this.menu.enable(true, 'custom'); }

  ngOnInit() {
    this.PasoDatosService.$getobjectJuego.subscribe(data1 => {
      console.log(data1)
      this.juego = data1;      
    }).unsubscribe();
    this.PasoDatosService.$getobjectSource.subscribe(data => {
      console.log(data)
      this.user = data;      
    })
    this.consularcomentario(this.juego);
    this.consularUsuario(this.user);
    console.log(this.comentario);
  }

  async consularcomentario(juego: any){
    const q = query(collection(this.db, "Comentarios"), where("Juego", "==", juego.Nombre))
    const querySnapshot = await getDocs(q);
    this.comentario= [];
    querySnapshot.forEach((doc) => {      
      this.comentario.push({
        Id: `${doc.id}`,
        Comentario:`${doc.data().Comentario}`,
        Usuario: `${doc.data().Usuario}`,
        Juego: `${doc.data().Juego}`
      });
    });
  }

  async consularUsuario(user: any){
    const q = query(collection(this.db, "Usuarios"), where("Email", "==", user.email))
    const querySnapshot = await getDocs(q);    
    querySnapshot.forEach((doc) => {
      this.id =`${doc.id}`;
      this.Nombre = `${doc.data().Nombre}`
      this.Apellidos = `${doc.data().Apellido}`
      this.FechaNacimiento = `${doc.data().Nombre}`
      this.Email = `${doc.data().fechaNacimiento}`
    });
  }

  async guardar(){
    try {
      const docRef = await addDoc(collection(this.db, "Comentarios"), {
        Usuario: this.Nombre + " " + this.Apellidos,
        Juego: this.juego.Nombre,
        Comentario: this.contenido
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  
}

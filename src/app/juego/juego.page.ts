import { Component, OnInit, ViewChild } from '@angular/core';
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from '../../environments/configFirebase';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, query, where } from "firebase/firestore";
import { Juegos } from '../clases/Juegos';
import { IonInfiniteScroll } from '@ionic/angular';
import { PasoDatosService } from '../services/paso-datos.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.page.html',
  styleUrls: ['./juego.page.scss'],
})
export class JuegoPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  app = initializeApp(firebaseConfig);
  db = getFirestore(this.app);
  juegos: Juegos[] = [];
  constructor(
    private PasoDatosService:PasoDatosService,
    private router: Router,
    private menu: MenuController
  ) { this.menu.enable(true, 'custom');}

  ngOnInit() {
    this.consularJuego();  
  }

  async consularJuego(){
    const querySnapshot = await getDocs(collection(this.db, "Juegos"));
    this.juegos= [];
    querySnapshot.forEach((doc) => {      
      this.juegos.push({
        id: `${doc.id}`,
        Nombre:`${doc.data().Nombre}`,
        Compania: `${doc.data().Compania}`,
        imagen: `${doc.data().imagen}`
      });
    });
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
      if (this.juegos.length === 10) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  perfilJuego(juego){
    this.PasoDatosService.sendObjectJuego(juego);
    this.router.navigateByUrl('/perfil-juego');
  }
}

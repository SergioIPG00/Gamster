import { Component, OnInit } from '@angular/core';
import { getAnalytics } from "firebase/analytics";
import { PasoDatosService } from '../services/paso-datos.service';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, query, where } from "firebase/firestore";
import { firebaseConfig } from '../../environments/configFirebase';
import { getFirestore } from "firebase/firestore";
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  app = initializeApp(firebaseConfig);
  db = getFirestore(this.app);  
  user: any;
  id: string;
  Nombre: string;
  Apellidos: string;
  FechaNacimiento: string;
  Email: string;
  constructor(
    private PasoDatosService:PasoDatosService,
    private menu: MenuController
  ) { this.menu.enable(true, 'custom');}

  ngOnInit() {    
    this.PasoDatosService.$getobjectSource.subscribe(data => {
      console.log(data)
      this.user = data;      
    })
    this.consularUsuario(this.user);
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

}

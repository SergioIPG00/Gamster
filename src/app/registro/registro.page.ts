import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { user } from '../clases/user.class';
import { initializeApp } from 'firebase/app';
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from '../../environments/configFirebase';
import { usuario } from '../clases/datosUsuario';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  user: user = new user;
  usuario: usuario = new usuario;
  app = initializeApp(firebaseConfig);
  db = getFirestore(this.app); 
  constructor(
    private authSvc: AuthService, 
    private router: Router,
    private menu: MenuController
  ) {this.menu.enable(false, 'custom'); }
  ngOnInit() {
  }

  async onRegister(){
    this.user.email = this.usuario.Email;
    const user = await this.authSvc.onRegister(this.user);
    if(user){
      console.log('se creo el usuario');
      this.router.navigateByUrl('/');
    }
    this.guardar(this.usuario);
  }

  async guardar(usuario: usuario){
  try {
    const docRef = await addDoc(collection(this.db, "Usuarios"), {
      Email: usuario.Email,
      Apellido: usuario.Apellidos,
      Nombre: usuario.Nombre,
      fechaNacimiento: usuario.FechaNacimiento,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  }

}

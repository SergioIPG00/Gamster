import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { user } from '../clases/user.class';
import { collection, getDocs, query, where } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from '../../environments/configFirebase';
import { initializeApp } from 'firebase/app';
import { PasoDatosService } from '../services/paso-datos.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: user = new user;
  app = initializeApp(firebaseConfig);
  db = getFirestore(this.app); 
  constructor(
    private authSvc: AuthService, 
    private router: Router,
    private PasoDatosService:PasoDatosService,
    private menu: MenuController
  ) {this.menu.enable(false, 'custom'); }

  ngOnInit() {
  }

  async onLogin(){
    const user = await this.authSvc.onLogin(this.user);
    this.goUsuario();
    if(user){
      console.log('se inicio sesion');
      this.router.navigateByUrl('/home');
    }
  }

  async consultarUsuario(user: user){
    const q = query(collection(this.db, "Usuarios"), where("Email", "==", user.email))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  }

  goUsuario(){
    this.PasoDatosService.sendObjectSource(this.user);
  }

}

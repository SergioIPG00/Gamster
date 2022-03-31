import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { user } from '../clases/user.class';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  user: user = new user;
  constructor(
    private authSvc: AuthService, 
    private router: Router
  ) { }

  ngOnInit() {
  }

  async onRegister(){
    const user = await this.authSvc.onRegister(this.user);
    if(user){
      console.log('se creo el usuario');
      this.router.navigateByUrl('/');
    }
  }


}

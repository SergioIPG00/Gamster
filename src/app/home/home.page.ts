import { Component, OnInit } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { Router } from '@angular/router';
import { PasoDatosService } from '../services/paso-datos.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  
  
  constructor(
    private menu: MenuController,
    private data: DataService,
    private PasoDatosService:PasoDatosService 
  ) {this.menu.enable(true, 'custom');}

    ngOnInit(): void {
      this.PasoDatosService.$getobjectSource.subscribe(data => console.log(data))
    }

    refresh(ev) {
      setTimeout(() => {
        ev.detail.complete();
      }, 3000);
    }

    getMessages(): Message[] {
      return this.data.getMessages();
    }



}

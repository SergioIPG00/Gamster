import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-boton-de-pagos',
  templateUrl: './boton-de-pagos.page.html',
  styleUrls: ['./boton-de-pagos.page.scss'],
})
export class BotonDePagosPage implements OnInit {

  pagar(){
    console.log('pagar')
  }

  constructor(
    private menu: MenuController
    ) { this.menu.enable(true, 'custom');}

  ngOnInit() {
  }

}

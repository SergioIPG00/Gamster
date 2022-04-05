import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-de-pagos',
  templateUrl: './boton-de-pagos.page.html',
  styleUrls: ['./boton-de-pagos.page.scss'],
})
export class BotonDePagosPage implements OnInit {

  pagar(){
    console.log('pagar')
  }

  constructor() { }

  ngOnInit() {
  }

}

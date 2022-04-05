import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BotonDePagosPageRoutingModule } from './boton-de-pagos-routing.module';

import { BotonDePagosPage } from './boton-de-pagos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BotonDePagosPageRoutingModule
  ],
  declarations: [BotonDePagosPage]
})
export class BotonDePagosPageModule {}

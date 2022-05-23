import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilJuegoPageRoutingModule } from './perfil-juego-routing.module';

import { PerfilJuegoPage } from './perfil-juego.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilJuegoPageRoutingModule
  ],
  declarations: [PerfilJuegoPage]
})
export class PerfilJuegoPageModule {}

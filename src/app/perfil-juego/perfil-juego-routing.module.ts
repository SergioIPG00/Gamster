import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilJuegoPage } from './perfil-juego.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilJuegoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilJuegoPageRoutingModule {}

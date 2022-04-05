import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BotonDePagosPage } from './boton-de-pagos.page';

const routes: Routes = [
  {
    path: '',
    component: BotonDePagosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BotonDePagosPageRoutingModule {}

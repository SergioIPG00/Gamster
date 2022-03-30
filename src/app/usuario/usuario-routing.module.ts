import { NgModule } from '@angular/core';
import { Routes,  RouterModule} from '@angular/router';

import { UsuarioPage } from './usuario.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioPage,
    children: 
    [
      {
        path: 'favoritos',
        loadChildren: () => import('../favoritos/favoritos.component').then(m => m.FavoritosComponent) 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioPageRoutingModule {}

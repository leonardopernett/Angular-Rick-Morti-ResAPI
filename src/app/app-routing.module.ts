import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CharacterDetailsComponent} from '@characters/character-details/character-details.component'
import {CharacterListComponent} from '@characters/character-list/character-list.component'

const routes: Routes = [
  {path:"", redirectTo:"/home",pathMatch:"full"},
  { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
  {path:"character-list", component:CharacterListComponent},
  {path:"character-details/:id", component:CharacterDetailsComponent},

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
    
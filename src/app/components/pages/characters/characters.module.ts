import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {InfiniteScrollModule} from 'ngx-infinite-scroll'

import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import {CharacterComponent} from './character.component'
import { CharacterService } from '@app/shared/services/character.service';

import { RouterModule } from '@angular/router';

const components = [CharacterListComponent, CharacterDetailsComponent, CharacterComponent]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule ,
    RouterModule,
    InfiniteScrollModule
  ],
  providers:[CharacterService],
  exports:[...components]
})
export class CharactersModule { }
   
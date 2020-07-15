import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {CharacterService} from '@shared/services/character.service'
import {Character} from '../interface/character.interface'
import {  ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common'
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
 character$:Observable<Character> 

  constructor(
    private characterService : CharacterService, 
    private activateRouter:ActivatedRoute,
    private location :Location
    ) { }

  ngOnInit(): void {
    this.getCharacterById()
  }

  getCharacterById(){
    this.activateRouter.params.pipe(take(1)).subscribe(params=>{
       const id = params['id'];
       this. character$ = this.characterService.detailsCharacter(id)
    })
  }

  onBack(){
    this.location.back();
  }

}

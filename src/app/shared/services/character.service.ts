import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../environments/environment'
import {Character} from '@app/components/pages/characters/interface/character.interface'
@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  searchCharacter(query='', page=1){
    const filter =`${environment.API}/?name=${query}&page=${page}`
    return this.http.get<Character[]>(filter)
  }

  detailsCharacter(id:number){
    const details = `${environment.API}/${id}`
    return this.http.get<Character>(details)
  }
}

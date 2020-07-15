import { Component, OnInit, Inject } from '@angular/core';

import {DOCUMENT} from '@angular/common'//se tuiliza para el dom navegador

import {Character} from '@characters/interface/character.interface'
import { CharacterService } from '@app/shared/services/character.service';
import {take, filter} from 'rxjs/operators'
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

type requestInfo= {
  next:string
}
@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
 characters:Character[]= [];

 info:requestInfo = {
   next:null
 }
 private pageNum = 2
 private query;
 private hideScroll = 200
 private showScroll = 500

  constructor(
    @Inject(DOCUMENT) private document:Document,
    private readonly characterService: CharacterService, 
    private activeRoute: ActivatedRoute,
    private router:Router
    ) { this.onUrlChange()}

//no se utiliza ya que no hay un boton para subir 
    onScrollTop(){
      this.document.documentElement.scrollTop = 0;
    }

//methdo scroll infinito 
    onScrollDown(){
       if(this.info.next){
         this.pageNum++
         this.getCharacter();
       }
    }

  ngOnInit(): void {
    this.getCharacterbyFilter()
  }

  onUrlChange(){
    this.router.events.pipe(
      filter((event)=> event instanceof NavigationEnd))
      .subscribe(()=>{
           this.characters=[]
           this.pageNum=1
           this.getCharacterbyFilter()
      })
  }



  getCharacterbyFilter(){
     this.activeRoute.queryParams.subscribe(params=>{
       if(params.q ===""){
        this.query=""
        this.getCharacter()
       }else{
         this.query= params.q
         this.getCharacter()
       }

     })
  }

  getCharacter(){
    this.characterService.searchCharacter(this.query, this.pageNum).pipe(take(1))
    .subscribe((res:any)=>{
        if(res.results.length){
          const {info, results} = res;
          this.characters = [...this.characters, ...results]
          this.info= info;
        }else{
          this.characters= []
        }
      }     
    )
  }

}

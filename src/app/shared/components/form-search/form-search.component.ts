import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  template: ` 
    <input
      #inputSearch
      type="text"
      class="form-control"
      autofocus
      placeholder="search..."
      (keyup)="onSearch(inputSearch.value)"
    />
  `,
  styles: ['input{width:100%}']
})
export class FormSearchComponent implements OnInit {
    
  constructor(private router:Router) { }

  ngOnInit(): void {
   
  }
  
  onSearch(value:string){
   if(value && value.length >2){
      this.router.navigate(['/character-list'],{
        queryParams:{q:value}
      })
   }
  }


}

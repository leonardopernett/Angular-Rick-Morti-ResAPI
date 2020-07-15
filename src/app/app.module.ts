import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FormSearchComponent } from './shared/components/form-search/form-search.component';
import {CharacterService} from '@shared/services/character.service'
// module
@NgModule({
  declarations: [ 
    AppComponent, HeaderComponent, FormSearchComponent 
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }

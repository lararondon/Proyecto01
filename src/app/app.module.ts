import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmmetComponent } from './emmet/emmet.component';
import { QueenComponent } from './queen/queen.component';
import { FuncionComponent } from './funcion/funcion.component';
import { OnewayComponent } from './oneway/oneway.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmmetComponent,
    QueenComponent,
    FuncionComponent,
    OnewayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

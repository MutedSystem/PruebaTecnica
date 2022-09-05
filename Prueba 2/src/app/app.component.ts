import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba-2';
  tema = 'claro'

  cambiarTemaGlobal(tema: string){
    this.tema = tema;
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.css']
})
export class ThemeSwitcherComponent implements OnInit {


  @Output() cambiarTemaEvent = new EventEmitter<string>();

  current_theme = "claro"

  constructor() { }

  ngOnInit(): void {
  }

  cambiarTema() {
    if (this.current_theme === "claro") {
      this.current_theme = "oscuro"
      this.cambiarTemaEvent.emit(this.current_theme)
    }else{
      this.current_theme = "claro"
      this.cambiarTemaEvent.emit(this.current_theme)
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/models/Persona';
//import { Persona } from 'src/app/models/Persona';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = []

  constructor() { }

  ngOnInit(): void {
    let persona1 = new Persona("Hernan", "Borre", 28 )
    this.personas.push(persona1)
    this.personas.push(new Persona("Alejandro", "Fantino", 55 ))
    this.personas.push(new Persona("Nicky", "Nicole", 22 ))
  }

}

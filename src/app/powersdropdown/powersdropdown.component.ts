import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-powersdropdown',
  templateUrl: './powersdropdown.component.html',
  styleUrls: ['./powersdropdown.component.css']
})



export class PowersdropdownComponent implements OnInit {



  powers = [ 'Very Smart', 'Flamb', 'Kamikaze', 'Perfect Cooking',
    'Laser Sword', 'Crime', 'Jumps so High it Looks Like Flight',
    'Dimensional Rift', 'Lava', 'Tornado Vomit',];

  constructor() { }

  ngOnInit(): void {
  }

}

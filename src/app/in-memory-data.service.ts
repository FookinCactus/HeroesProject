import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Kind' },
      { id: 12, name: 'Florb' },
      { id: 13, name: 'Terrorist' },
      { id: 14, name: 'Frites' },
      { id: 15, name: 'Clone Drone' },
      { id: 16, name: 'DangerZone' },
      { id: 17, name: 'Flite' },
      { id: 18, name: 'Mr Weird' },
      { id: 19, name: 'Lava' },
      { id: 20, name: 'Windy' },
    ];
return {heroes};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
}

}

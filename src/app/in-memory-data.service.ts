import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Kind', power: 'Very Smart' },
      { id: 12, name: 'Florb', power: 'Flamb' },
      { id: 13, name: 'Terrorist', power: 'Kamikaze' },
      { id: 14, name: 'Frites', power: 'Perfect Cooking' },
      { id: 15, name: 'Clone Drone', power: 'Laser Sword' },
      { id: 16, name: 'DangerZone', power: 'Crime' },
      { id: 17, name: 'Flite', power: 'Jumps so High it Looks Like Flight' },
      { id: 18, name: 'Mr Weird', power: 'Dimensional Rift' },
      { id: 19, name: 'Lava', power: 'Lava' },
      { id: 20, name: 'Windy', power: 'Tornado Vomit' },
    ];
return {heroes};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
}

}

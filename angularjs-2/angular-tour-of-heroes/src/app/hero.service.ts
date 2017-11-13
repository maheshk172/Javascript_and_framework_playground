import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Heros } from './mock-heros';
import { MessageService } from './message.service';

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }
  
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(Heros);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(Heros.find(hero => {return hero.id === id;} ))
  }

}

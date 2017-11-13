import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class HerosComponent implements OnInit {

  ngOnInit() {
    this.getHeroes();
  }

  constructor(private heroService: HeroService) { }

  //selectedHero: Hero;
  heroes: Hero[];

  getHeroes(): void {
    //No More Sync
    //this.heroes = this.heroService.getHeroes();

    this.heroService.getHeroes().subscribe(newHeroes => {
      this.heroes = newHeroes;
    });
    
  }

  /* onSelect(hero: Hero) {
    this.selectedHero = hero;
  } */

}

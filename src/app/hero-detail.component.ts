import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'hero-detail',
    template: `
        <div *ngIf="hero">
            <h2>{{hero.name}} detail!</h2>
            <div><label>id: {{hero.id}}</label></div>
            <div>
                <label>Name: </label>
                <input type="text" [(ngModel)] = "hero.name" />
            </div>
        </div>
    `
})
export class HeroDetailComponent {
    @Input() hero:Hero;
}
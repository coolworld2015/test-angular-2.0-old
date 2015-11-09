import {bootstrap, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
    selector: 'my-app',
    templateUrl: 'app/heroes.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    styles: [`
      .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
      .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
      .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
      .heroes .badge {
        font-size: small;
        color: white;
        padding: 0.1em 0.7em;
        background-color: #369;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -1px;
      }
      .selected { background-color: #EEE; color: #369; }
      `],
})

class AppComponent {
    public title = 'Test Angular 2.0';
    public heroes = HEROES;
    public selectedHero:Hero;

    public onSelect(hero: Hero) { this.selectedHero = hero; }

    public getSelectedClass(hero: Hero) {
        return { 'selected': hero === this.selectedHero };
    }
}
bootstrap(AppComponent);

var HEROES:Hero[] = [
    {"id": 11, "name": "Mr. Nice"},
    {"id": 12, "name": "Narco"},
    {"id": 13, "name": "Bombasto"},
    {"id": 14, "name": "Celeritas"},
    {"id": 15, "name": "Magneta"},
    {"id": 16, "name": "RubberMan"},
    {"id": 17, "name": "Dynama"},
    {"id": 18, "name": "Dr IQ"},
    {"id": 19, "name": "Magma"},
    {"id": 20, "name": "Tornado"}
];
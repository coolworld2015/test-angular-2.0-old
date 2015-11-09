var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Test Angular 2.0';
        this.heroes = HEROES;
        this.selectedHero = {
            id: HEROES[0].id,
            name: HEROES[0].name,
        };
    }
    AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            template: "<center>\n    <h2>My Heroes</h2>\n    <ul class=\"heroes\">\n        <li *ng-for=\"#hero of heroes\" (click)=\"onSelect(hero)\">\n          <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n        </li>\n    </ul>\n    <hr>\n\n         <table border=\"1\" width=\"100%\">\n            <th>ID</th>\n            <th>Name</th>\n            <tr *ng-for=\"#hero of heroes\" (click)=\"onSelect(hero)\">\n                <td>{{hero.id}}</td>\n                <td>{{hero.name}}</td>\n            </tr>\n        </table>\n        <hr>\n            <h2>\n                {{selectedHero.name}}<br>\n                <input [(ng-model)]=\"selectedHero.name\" placeholder=\"name\">\n            </h2>\n    ",
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.NgFor],
            styles: ["\n      .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}\n      .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }\n      .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}\n      .heroes .badge {\n        font-size: small;\n        color: white;\n        padding: 0.1em 0.7em;\n        background-color: #369;\n        line-height: 1em;\n        position: relative;\n        left: -1px;\n        top: -1px;\n      }\n      .selected { background-color: #EEE; color: #369; }\n      "],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent);
var HEROES = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
];

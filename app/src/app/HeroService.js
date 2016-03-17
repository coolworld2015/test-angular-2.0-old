"use strict";
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
var HeroService = (function () {
    function HeroService() {
        this.heroes = [
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
    }
    HeroService.prototype.getHeroes = function () {
        return this.heroes;
    };
    return HeroService;
}());
exports.HeroService = HeroService;

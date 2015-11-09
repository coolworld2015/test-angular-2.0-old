import {Component, bootstrap} from 'angular2/angular2';
@Component({
    selector: 'my-app',
    template: '<center><h1><h1>{{title}}</h1><h2>{{hero}}</h2></h1></center>'
})
class AppComponent { 
  public title = 'Test Angular 2.0';
  public hero = 'Coolworld  !!!';
}
bootstrap(AppComponent);
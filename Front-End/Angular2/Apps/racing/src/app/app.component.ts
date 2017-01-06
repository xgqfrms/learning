import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';
    carParts = [
        {
        "id": 1,
        "name":  "super car",
        "desc": "These tires are the very best",
        "inStock": 5
        },{
        "id": 2,
        "name": "Reinforced Shocks",
        "desc": "Shocks made from kryptonite",
        "inStock": 4
        }
    ];
}

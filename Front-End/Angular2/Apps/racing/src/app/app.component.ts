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
            "inStock": 5,
            "price": 4.99
        },{
            "id": 2,
            "name": "Reinforced Shocks",
            "desc": "Shocks made from kryptonite",
            "inStock": 4,
            "price": 9.99
        }
    ];
    totalCarParts() {
        /*let sum = 0;
        for (let carPart of this.carParts) {
            sum += carPart.inStock;
        }
        return sum;*/
        // return this.carParts.reduce(function(prev, current) { return prev + current.inStock; }, 0 );
        return this.carParts.reduce((prev, current) => prev + current.inStock, 0 );
    }
}

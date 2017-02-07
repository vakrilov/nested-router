import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    constructor(router: Router) {
        router.events.subscribe((event) => {
            console.log("-----> " + event.toString());
        });
    }
 }

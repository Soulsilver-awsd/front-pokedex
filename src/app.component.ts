import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
    TranslateService
} from "@ngx-translate/core";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule],
    template: `<router-outlet></router-outlet>`
})
export class AppComponent {
    private translateService = inject(TranslateService);

    constructor() {
        this.translateService.addLangs(['es', 'en']);
        this.translateService.setFallbackLang('en');
        this.translateService.use('es');
    }
}

import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
    TranslateService
} from "@ngx-translate/core";
import { environment } from './app/environments/environments';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule],
    template: `<router-outlet></router-outlet>`
})
export class AppComponent {
    private readonly translateService = inject(TranslateService);

    constructor() {
        this.translateService.addLangs(environment.I18N.AVAILABLE_LANGS);
    }
}

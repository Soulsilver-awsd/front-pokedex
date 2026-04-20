import { Component } from '@angular/core';
import { TranslateDirective } from '@ngx-translate/core';

@Component({
    standalone: true,
    selector: 'app-footer',
    imports: [TranslateDirective],
    template: `<div class="layout-footer translate">
       <span translate>footer.description</span>
        </div>`
})
export class AppFooter { }

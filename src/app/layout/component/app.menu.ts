import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class AppMenu {
    model: MenuItem[] = [];

    constructor(
        private translate: TranslateService
    ) { }

    ngOnInit() {
        this.translate.onLangChange.subscribe(() => {
            this.loadMenu();
        });
        this.loadMenu();
    }
    loadMenu() {
        this.model = [
            {
                label: this.translate.instant("menu.title"),
                items: [
                    { label: this.translate.instant('menu.items.pokedex'), icon: 'pi pi-fw pi-tablet', routerLink: ['/pokedex'] },
                    { label: this.translate.instant('menu.items.about'), icon: 'pi pi-fw pi-info-circle', routerLink: ['/about'] }
                ]
            }
        ];
    }
}

import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { PokedexPageComponent } from '@pages/pokedex/pokedex-page/pokedex-page.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', component: PokedexPageComponent }
        ]
    }
];

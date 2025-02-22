import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home-page/home-page.component').then( m => m.HomePageComponent )
    },
    {
        path: 'menu',
        loadComponent: () => import('./pages/menu-page/menu-page.component').then( m => m.MenuPageComponent )
    },
    {
        path: 'faq',
        loadComponent: () => import('./pages/faq-page/faq-page.component').then( m => m.FaqPageComponent )
    },
    {
        path: 'about-us',
        loadComponent: () => import('./pages/about-us-page/about-us-page.component').then( m => m.AboutUsPageComponent )
    }
];

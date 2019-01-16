import { Routes } from '@angular/router';

import { HomeComponent } from '../pages/home/home.component';
import { AboutComponent } from '../pages/about/about.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { MenuComponent } from '../pages/menu/menu.component';

import { ProductsAllComponent } from '../pages/products-all/products-all.component';

import { ProductDetailComponent } from './../pages/product-detail/product-detail.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'productsall', component: ProductsAllComponent },
    { path: 'productdetail/:id', component: ProductDetailComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { MenuComponent } from '../menu/menu.component';
import { ProductDetailComponent } from './../product-detail/product-detail.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'productdetail/:id', component: ProductDetailComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
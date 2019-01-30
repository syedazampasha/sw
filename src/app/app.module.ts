/**
  - Angular App Module is the main file
  - All the components, services, directives, modules etc., have to add in this
  - 
 */

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';



import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { baseURL } from './shared/baseurl';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';

import 'hammerjs';

/* App Specific Component Starts */
import { AppComponent } from './app.component';

/* global starts */
import { HeaderComponent } from './global/header/header.component';
import { FooterComponent } from './global/footer/footer.component';
import { LoginComponent } from './global/login/login.component';
/* global ends */

/* pages starts */
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { BannerComponent } from './global/banner/banner.component';
/* pages ends */

import { AppRoutingModule } from './app-routing/app-routing.module';
/* App Specific Component Ends */

/* Services Imports Starts */
import { ProductService } from './services/product.service';
import { PromotionService } from './services/promotion.service';
import { LeadersService } from './services/leaders.service';
import { BannerService } from './services/banner.service';

/** Custom Directives Starts */
import { HighlightDirective } from './directives/highlight.directive';
/** Custom Directives Ends */

/** MDB Starts */
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProductsAllComponent } from './pages/products-all/products-all.component';
import { AddProductComponent } from './pages/ADMIN/add-product/add-product.component';
import { EditProductComponent } from './pages/ADMIN/edit-product/edit-product.component';
import { DeleteProductComponent } from './pages/ADMIN/delete-product/delete-product.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
/** MDB Ends */

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';

/* Services Imports Ends */

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductDetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    HighlightDirective,
    BannerComponent,
    ProductsAllComponent,
    AddProductComponent,
    EditProductComponent,
    DeleteProductComponent,
    CartComponent,
    CheckoutComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    HttpClientModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebaseconfig),
    AngularFirestoreModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    ProductService,
    PromotionService,
    LeadersService,
    ProcessHTTPMsgService,
    BannerService,
    { provide: 'BaseURL', useValue: baseURL }
  ],
  entryComponents: [
    LoginComponent
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
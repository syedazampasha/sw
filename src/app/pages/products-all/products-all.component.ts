import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Product } from '../../shared/product';
import { ProductService } from './../../services/product.service';

import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import { flyInOut, expand } from './../../animations/app.animations';

@Component({
  selector: 'app-products-all',
  templateUrl: './products-all.component.html',
  styleUrls: ['./products-all.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display:block'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})

export class ProductsAllComponent implements OnInit {

  products: Product[];
  errMess: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ProductService: ProductService,
    private productService: ProductService,
    @Inject('BaseURL') private BaseURL
  ) { }

  addForm: FormGroup;
  product: Product;
  editForm: FormGroup;
  submitted = false;

  ngOnInit() {

    let productId = localStorage.getItem("productId");

    if (!productId) {
      alert("Something wrong!");
      this.router.navigate(['']);
      return;
    }


    this.ProductService.getProducts()
      .subscribe(
        (products) => this.products = products,
        errMess => this.errMess = <any>errMess
      );

    this.addForm = this.formBuilder.group({
      id: [],
      featured: false,
      name: ['', Validators.required],
      //code: ['', Validators.required],
      category: ['', Validators.required],
      tag: ['', Validators.required],
      qty: ['', Validators.required],
      price: ['', Validators.required],
      size: ['', Validators.required],
      image: ['', Validators.required],
      outofstock: ['', Validators.required],
      note: ['', Validators.required],
      material: ['', Validators.required],
      //color: ['', Validators.required],
      care: ['', Validators.required],
      description: ['', Validators.required]
      /* fitType: ['', Validators.required],
      sleeves: ['', Validators.required],
      unique: ['', Validators.required],
      quality: ['', Validators.required] */
    });



    this.editForm = this.formBuilder.group({
      id: [],
      featured: false,
      name: ['', Validators.required],
      code: ['', Validators.required],
      category: ['', Validators.required],
      tag: ['', Validators.required],
      qty: ['', Validators.required],
      price: ['', Validators.required],
      size: ['', Validators.required],
      image: ['', Validators.required],
      outofstock: ['', Validators.required],
      note: ['', Validators.required],
      material: ['', Validators.required],
      //color: ['', Validators.required],
      care: ['', Validators.required],
      description: ['', Validators.required]
      /* fitType: ['', Validators.required],
      sleeves: ['', Validators.required],
      unique: ['', Validators.required],
      quality: ['', Validators.required] */
    });

    this.productService.getProduct(productId).subscribe(data => {
      console.log(data);
      this.editForm.patchValue(data);
      //Don't use editForm.setValue() as it will throw console error
    });



  }
  onSubmit() {
    this.submitted = true;

    if (this.addForm.valid) {
      console.log('in');
      // debugger;
      this.productService.addProduct(this.addForm.value)
        .subscribe(data => {
          debugger;
          console.log(data);
          this.router.navigate(['']);
        });
    }

  }

  updateProduct(product: Product) {

    alert('Hello Mr. Edit');
    // return this.http.post(Product + 'products' + '/' + product.id, product);
    //return this.http.put(Product + 'products' + '/' + product.id, product);
  }

  getAdminId(event) {
    const target = event.currentTarget.id;
    console.log('target - ' + target);
  }
  // get the form short name to access the form fields
  get f() { return this.addForm.controls; }

}

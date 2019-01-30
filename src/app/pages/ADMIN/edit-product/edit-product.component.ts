import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { ProductService } from './../../../services/product.service';
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
//import { ProductModel } from '../ProductModel';

import { Product } from './../../../shared/product';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  product: Product;
  editForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
    let productId = localStorage.getItem("productId");
    
    //let productId = localStorage.getItem("productId");

    if (!productId) {
      alert("Something wrong!");
      this.router.navigate(['']);
      return;
    }

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

    // get the form short name to access the form fields
    // get f() { return this.editForm.controls; }
  }

  onSubmit() {
    this.submitted = true;
    //return
    if (this.editForm.valid) {
      this.productService.updateProduct(this.editForm.value)
        .subscribe(data => {
          return;
          console.log(data);
          this.router.navigate(['']);
        });
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";

import { ProductService } from './../../../services/product.service';
//import { FileuploadService } from './../../../services/fileupload.service';

import { first } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})

export class AddProductComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private productService: ProductService

  ) { }

  addForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.addForm = this.formBuilder.group({

      // Adding New Key Value to DB has to be added in html or else there will be error 
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
  }


  onSubmit() {
    this.submitted = true;
    debugger;
    if (this.addForm.valid) {
      this.productService.addProduct(this.addForm.value)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(['']);
        });
    }
  }



  // get the form short name to access the form fields
  get f() { return this.addForm.controls; }

  /* uploadFileToActivity() {
    this.FileuploadService.postFile(this.fileToUpload).subscribe(data => {
      // do something, if upload success
      }, error => {
        console.log(error);
      });
  } */
}

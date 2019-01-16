import { routes } from './../../app-routing/routes';

import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';
import { Product } from './../../shared/product';
//import {PRODUCTS} from '../shared/products';

import { Params, ActivatedRoute } from '@angular/router';// for product specific id
import { Location } from '@angular/common';  // for product specific id

import { ProductService } from './../../services/product.service';
import { switchMap } from 'rxjs/operators';
import { Comment } from '../../shared/comment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { visibility, flyInOut } from './../../animations/app.animations';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  animations: [
    visibility(),
    flyInOut()
  ],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display:block'
  }
})


export class ProductDetailComponent implements OnInit {

  submitReview: FormGroup;
  review: Comment;
  value: number = 5;
  errMess: string;

  product: Product;
  productIds: string[];
  prev: string;
  next: string;
  productcopy: Product;
  visibility = 'shown';


  reviewErrors = {
    'author': '',
    'comment': ''
  };

  @ViewChild('ffrom') feedbackFormDirective;

  reviewValidationMessages = {
    'author': {
      'required': 'Author Name is required',
      'minlength': 'Author Name must be at least 2 characters long.',
    },
    'comment': {
      'required': 'Comment is required'
    }
  }

  constructor(
    private productService: ProductService,
    private location: Location,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    @Inject('BaseURL') private BaseURL
  ) {
    this.createReviewForm();

    this.submitReview.valueChanges
      .subscribe((data) => this.onReviewValueChange(data));

    this.onReviewValueChange();
  }

  ngOnInit() {
    this.productService.getProductIds()
      .subscribe(
        (productIds => this.productIds = productIds)
      );

    this.route.params
      .pipe(switchMap((params: Params) => {
        this.visibility = 'hidden';
        return this.productService.getProduct(params['id'])
      }))

      .subscribe(product => {
        this.product = product;
        this.productcopy = product;
        this.setPrevNext(product.id);
        this.visibility = 'shown';
      })
  }

  setPrevNext(productIds: string) {
    const index = this.productIds.indexOf(productIds);
    this.prev = this.productIds[(this.productIds.length + index - 1) % this.productIds.length];
    this.next = this.productIds[(this.productIds.length + index + 1) % this.productIds.length];
  }

  createReviewForm() {
    this.submitReview = this.formBuilder.group({
      author: ['', [Validators.required, Validators.minLength(2)]],
      rating: '5',
      comment: ['', Validators.required]
    })
  }

  onSubmit() {
    this.review = this.submitReview.value;
    this.review.date = new Date().toISOString();
    this.productcopy.comments.push(this.review);

    this.productService.putProduct(this.productcopy)
      .subscribe(product => {
        this.product = product;
        this.productcopy = product
      },
        errmess => {
          this.product = null;
          this.productcopy = null;
          this.errMess = <any>errmess
        })
    this.submitReview.reset({
      author: '',
      rating: '5',
      comment: ''
    });
    this.feedbackFormDirective.reset();
  }

  onReviewValueChange(data?: any) {
    if (!this.submitReview) {
      return;
    }

    const reviewForm = this.submitReview;
    for (const formField in this.reviewErrors) {
      if (this.reviewErrors.hasOwnProperty(formField)) {
        this.reviewErrors[formField] = "";
        const control = reviewForm.get(formField);
        if (control && control.dirty && !control.valid) {
          const messages = this.reviewValidationMessages[formField];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.reviewErrors[formField] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
  goBack(): void {
    this.location.back();
  }
}
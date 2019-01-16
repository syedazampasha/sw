
import { Component, OnInit, ViewChild } from '@angular/core';
import { Feedback, ContactType } from './../../shared/feedback';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { flyInOut } from './../../animations/app.animations';

import { FeedbackService } from './../../services/feedback.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display:block'
  },
  animations: [
    flyInOut()
  ]
})

export class ContactComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;
  errMess: string;
  spin: boolean;
  confirm: boolean;

  @ViewChild('fform') feedbackFormDirective;

  constructor(
    private fb: FormBuilder,
    private feedbackService: FeedbackService
  ) {
    this.confirm = false;
    this.spin = false;
    this.createForm();
  }

  ngOnInit() { }

  formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': ''
  };

  validationMessages = {
    'firstname': {
      'required': 'First Name is required.',
      'minlength': 'First Name must be at least 2 characters long.',
      'maxlength': 'FirstName cannot be more than 25 characters long.'
    },
    'lastname': {
      'required': 'Last Name is required.',
      'minlength': 'Last Name must be at least 2 characters long.',
      'maxlength': 'Last Name cannot be more than 25 characters long.'
    },
    'telnum': {
      'required': 'Tel. number is required.',
      'pattern': 'Tel. number must contain only numbers.'
    },
    'email': {
      'required': 'Email is required.',
      'email': 'Email not in valid format.'
    },
  };

  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      telnum: [0, [Validators.required, Validators.pattern]],
      email: ['', [Validators.required, Validators.email]],
      agree: false,
      contacttype: 'None',
      message: ''
    });

    this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  /*   onSubmit() {
      this.feedback = this.feedbackForm.value;
      console.log(this.feedback);
      this.feedbackForm.reset({
        firstname: '',
        lastname: '',
        telnum: 0,
        email: '',
        agree: false,
        contacttype: '',
        message: ''
      });
      this.feedbackFormDirective.resetForm();
    } */

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    if (this.feedback) {
      this.spin = true;
      const feedbackCopy = Object.assign({}, this.feedback);
      this.feedbackService.submitFeedback(feedbackCopy)
        .subscribe(feedback => {
          this.feedback = feedback;
          this.spin = false;
          this.confirm = true;
          setTimeout(() => { this.confirm = false; }, 5000);
          this.feedbackForm.reset({
            firstname: '',
            lastname: '',
            telnum: 0,
            email: '',
            agree: false,
            contacttype: 'None',
            message: ''
          });
          this.feedbackFormDirective.resetForm();
        },
          errmess => {
            this.feedback = null;
            this.spin = false;
            this.confirm = false;
            this.errMess = <any>errmess;
          });
    }

  }
}

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { NgForm } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})

export class EmployeeComponent implements OnInit {
  constructor(
    private service: EmployeeService,
    private firestore: AngularFirestore,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: null,
      fullName: '',
      position: '',
      empCode: '',
      mobile: ''
    }
  }

  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    console.log(data);
    delete data.id;
    if (form.value.id == null) {
      alert('hi');
      this.firestore.collection('employees').add(data);
    }
    else { alert('hi 2');
      this.firestore.doc('employees/' + form.value.id).update(data);
    }
    this.resetForm(form);
    this.toastr.success('Submitted successfully !', 'EMP Register');
  }

}

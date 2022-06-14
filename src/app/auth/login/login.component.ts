import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  authLogin!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.authLogin = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
    this.authLogin.statusChanges.subscribe((status) => {
      setTimeout(() => {}, 3000);
      console.log(status);
    });
  }
  onSubmit() {
    console.log(this.authLogin);
    this.authLogin.reset();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  profile!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.profile = new FormGroup({
      fullName: new FormControl(null, Validators.required),
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
    this.profile.statusChanges.subscribe((status) => {
      setTimeout(() => {}, 2000);
      console.log(status);
    });
  }
  onSubmit() {
    console.log(this.profile);

    console.log(this.profile.value);

    this.profile.reset();
  }
}

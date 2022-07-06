import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  profile!: FormGroup;
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    if (this.authService.isLoggedin()) {
      this.router.navigate(['/']);
    }
    this.profile = new FormGroup({
      fullName: new FormControl(null, Validators.required),
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }
  onSubmit() {
    setTimeout(() => {
      this.authService.signup(this.profile.value).subscribe((res) => {
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1500);
      });
    }, 2000);
  }
}

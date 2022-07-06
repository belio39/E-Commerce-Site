import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  authLogin!: FormGroup;
  constructor(private router: Router, private authServices: AuthService) {}

  ngOnInit(): void {
    if (this.authServices.isLoggedin()) {
      this.router.navigate(['/']);
    }
    this.authLogin = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }
  onSubmit() {
    setTimeout(() => {
      this.authServices.login(this.authLogin.value).subscribe((res) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.user.role);
        localStorage.setItem('user', res.user.userid);

        if (res.user.role === 'user') {
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 1500);
        } else if (res.user.role === 'admin') {
          setTimeout(() => {
            this.router.navigate(['/admin']);
          }, 1500);
        }
      });
    }, 1000);
  }
}

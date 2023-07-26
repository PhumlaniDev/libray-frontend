import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../services/authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public registerForm!: FormGroup;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  public submitForm() {
    if (this.registerForm.invalid) {
      // Mark all fields as touched to trigger validation errors
      Object.keys(this.registerForm.controls).forEach((key) => {
        const control = this.registerForm.get(key);
        if (control) {
          control.markAsTouched();
        }
      });
    }

    this.authenticationService.register(
      this.registerForm.get('fname')!.value,
      this.registerForm.get('lname')!.value,
      this.registerForm.get('email')!.value,
      this.registerForm.get('password')!.value
    );
  }

  get firstName() {
    return this.registerForm.get('fname');
  }

  get lastName() {
    return this.registerForm.get('lname');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }
}

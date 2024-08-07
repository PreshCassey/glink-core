import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  EmailValidator,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidatorFn,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule, RouterModule],
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  // providers: [EmailValidator],

})
export class SignupComponent implements OnInit {

 signupForm: FormGroup;

  // tslint:disable-next-line:max-line-length
  private emailPattern =
    '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])';

  comparePassword: boolean;
  errorMessage!: boolean;
  successMessage!: boolean;
  passwordHide: boolean = true;
  confirmPasswordHide: boolean = true;
  registrationMsg!: string;
  successMsg!: string;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.comparePassword = false;
    this.signupForm = this.fb.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z ]*$'),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z ]*$'),
        ],
      ],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      dateOfBirth: ['', [Validators.required, this.validateDateOfBirth()]],
      gender: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  private validateDateOfBirth(): ValidatorFn {
    return (control: AbstractControl) => {
      const currentDate = new Date();
      const selectedDate = new Date(control.value);
      const age = currentDate.getFullYear() - selectedDate.getFullYear();

      if (age < 18 || age > 100) {
        return { invalidDate: true };
      }

      return null;
    };
  }

  get formControls() {
    return this.signupForm.controls;
  }

  ngOnInit(): void {
    this.signupForm.valueChanges
      .pipe(
        map((controls) => {
          return (
            this.formControls['confirmPassword'].value ===
            this.formControls['password'].value
          );
        })
      )
      .subscribe((passwordState) => {
        this.comparePassword = passwordState;
      });
  }

  // Signup user method
  signupUser() {
    if (this.signupForm.invalid) {
      this.errorMessage = true;
      this.registrationMsg = 'Error in form';
      return;
    }
  }
}

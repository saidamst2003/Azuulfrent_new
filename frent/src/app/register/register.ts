import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required]
    });
  }

  onSubmit() {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.registerForm.invalid) {
      this.errorMessage = 'Veuillez remplir tous les champs correctement.';
      return;
    }

    const { role, ...userData } = this.registerForm.value;
    
    this.http.post(`http://localhost:8081/user/register/${role}`, userData)
      .subscribe({
        next: () => {
          this.successMessage = 'Inscription réussie !';
          this.registerForm.reset();
          setTimeout(() => this.router.navigate(['/login']), 1200);
        },
        error: (err) => {
          this.errorMessage = err.error?.message || err.message || 'Erreur lors de l\'inscription';
        }
      });
  }
}

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtelierService } from '../service/atelierService';
import { AtelierModel } from '../model/atelierModel.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-atelier',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './atelier.html',
  styleUrls: ['./atelier.css'],
})
export class AtelierComponent implements OnInit {

  ateliers: AtelierModel[] = [];

  postAtelierForm! : FormGroup;

  loading: boolean = true;

  showForm: boolean = false;

  constructor( private atelierService: AtelierService, private cd: ChangeDetectorRef , private fb :FormBuilder) {}

  ngOnInit(): void {
    this.getAllAtelier();

    this.postAtelierForm = this.fb.group({
      nom: [null, Validators.required],
      description: [null, Validators.required],
      date: [null, Validators.required],
      heure: [null, Validators.required],
      categorie: [null, Validators.required]
    });
  }


  postAtelier() {
    if (this.postAtelierForm.valid) {
    console.log(this.postAtelierForm.value);
  
    this.atelierService.postAtelier(this.postAtelierForm.value).subscribe({
      next: (response) => {
        console.log('Atelier créé avec succès:', response);
        
        this.postAtelierForm.reset();
        this.showForm = false;
        this.getAllAtelier();
      },
      error: (err: any) => {
        console.error('Erreur lors de la création de l\'atelier:', err);
      }
    });
  } else {
    console.log('Formulaire invalide');
  }
}


  getAllAtelier(): void {
    this.atelierService.getAllAtelier().subscribe({

      next: (data) => {

        this.ateliers = data;
        this.loading = false;
        this.cd.detectChanges(); 
  
        console.log('Ateliers récupérés:', this.ateliers);
      },
      error: (err: any) => {
        console.error('Erreur lors de la récupération des ateliers:', err);
        this.loading = false;
      }
    });
  }



}

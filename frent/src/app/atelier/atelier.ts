import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtelierService } from '../service/atelierService';
import { AtelierModel } from '../model/atelierModel.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  id: number | null ;

  constructor( 
    private atelierService: AtelierService, 
    private cd: ChangeDetectorRef , 
    private fb :FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

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

  onUpdateAtelier(atelier: AtelierModel) {
  this.postAtelierForm.patchValue(atelier);
  this.id = atelier.id;
  this.showForm = true;
}

updateAtelier() {
  if (this.postAtelierForm.valid && this.id) {
    this.atelierService.updateAtelier(this.id, this.postAtelierForm.value).subscribe({
      next: (res) => {
        console.log("atelier mis à jour :", res);

        const index = this.ateliers.findIndex(a => a.id === this.id);
        if (index !== -1) {
          this.ateliers[index] = res;
        }

        this.showForm = false;
        this.postAtelierForm.reset();
        this.id = null;
      },
      error: (err) => {
        console.error('Erreur lors de la mise à jour', err);
      }
    });
  } else {
    console.log('Formulaire invalide ou ID manquant');
  }
}

   }

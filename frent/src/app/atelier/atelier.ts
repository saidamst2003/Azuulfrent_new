import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtelierService } from '../service/atelierService';
import { AtelierModel } from '../model/atelierModel.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-atelier',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './atelier.html',
  styleUrls: ['./atelier.css'],
})
export class AtelierComponent implements OnInit {

  ateliers: AtelierModel[] = [];

  postAtelier! : FormGroup;

  loading: boolean = true;

  constructor( private atelierService: AtelierService, private cd: ChangeDetectorRef , private fb :FormBuilder) {}

  ngOnInit(): void {
    this.getAllAtelier();

    this.postAtelier = this.fb.group({
      nom: [null, Validators.required],
      description: [null, Validators.required],
      date: [null, Validators.required],
      heure: [null, Validators.required],
      categorie: [null, Validators.required]
    });
  }
  

  getAllAtelier(): void {
    this.atelierService.getAllAtelier().subscribe({

      next: (data) => {

        this.ateliers = data;
        this.loading = false;
        this.cd.detectChanges(); 
  
        console.log('Ateliers récupérés:', this.ateliers);
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des ateliers:', err);
        this.loading = false;
      }
    });
  }


}

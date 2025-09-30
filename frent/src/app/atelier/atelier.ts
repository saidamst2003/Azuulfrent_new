import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtelierService } from '../service/atelierService';
import { AtelierModel } from '../model/atelierModel.model';

@Component({
  selector: 'app-atelier',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './atelier.html',
  styleUrls: ['./atelier.css'],
})
export class AtelierComponent implements OnInit {
  ateliers: AtelierModel[] = [];
  loading: boolean = true;

  constructor(
    private atelierService: AtelierService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getAllAtelier();
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

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtelierService } from '../service/atelierService';
import { AtelierModel } from '../model/atelierModel.model';

@Component({
  selector: 'app-atelier',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './atelier.html',
  styleUrl: './atelier.css',
})
export class AtelierComponent implements OnInit {
  ateliers: AtelierModel[] = [];

  constructor(private atelierService: AtelierService) {}

  ngOnInit(): void {
    this.getAllAtelier();
  }

  getAllAtelier(): void {
    this.atelierService.getAllAtelier().subscribe({
      next: (data) => {
        this.ateliers = data;
        console.log('Ateliers récupérés:', this.ateliers);
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des ateliers:', err);
      }
    });
  }
}
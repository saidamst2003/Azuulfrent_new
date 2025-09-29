import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // bach *ngFor w *ngIf ykhdmo
import { AtelierService } from '../service/atelierService';
import { AtelierModel } from '../model/atelierModel.model';

@Component({
  selector: 'app-atelier',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './atelier.html',
  styleUrls: ['./atelier.css'],
})
export class AtelierComponent {
  ateliers: AtelierModel[] = [];

  constructor(private atelierService: AtelierService){}

  ngOnInit() {
    this.getAllAtelier()
  }

  getAllAtelier(){
    this.atelierService.getAllAtelier().subscribe({
      next: (data) => {
        this.ateliers = data;
        console.log(data);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  
}

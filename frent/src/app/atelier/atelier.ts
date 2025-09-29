import { Component } from '@angular/core';
import { AtelierService } from '../service/atelierService';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-atelier',
  standalone: true,
  imports: [NgFor],
  templateUrl: './atelier.html',
  styleUrls: ['./atelier.css'],
})
export class Atelier {

ateliers: any[] = [];

constructor (private atelierService: AtelierService){}

  ngOnInit() {
    this.atelierService.getAllAtelier().subscribe({
      next: (res) => {
        console.log(res); 
        this.ateliers = res;
      },
      error: (err) => console.error(err)
    });
  }
  
 getAllAtelier() {
    this.atelierService.getAllAtelier().subscribe((res: any) => {
      this.ateliers = res;
    });


}
}
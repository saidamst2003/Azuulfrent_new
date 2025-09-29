import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AtelierService } from '../service/atelierService';

@Component({
  selector: 'app-atelier',
  standalone: true,
  templateUrl: './atelier.html',
  styleUrls: ['./atelier.css'] 
})
export class Atelier {
constructor (private atelierService: AtelierService){}

ngOnInit(){
  this.getAllAtelier();
}

  getAllAtelier() {
    this.atelierService.getAllAtelier().subscribe((res: any) => {
      console.log(res);
    });


}
}
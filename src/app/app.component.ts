import { Component } from '@angular/core';
import { MedicalAppService } from './services/medical-app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'medical-app-web';

  constructor(private medicalAppService:MedicalAppService ) {
   
  }

  ngOnInit(){
    this.medicalAppService.getDoctors().subscribe();
  }
}

import { Component } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-ag',
  standalone: false,
  templateUrl: './ag.component.html',
  styleUrl: './ag.component.css',
  providers:[EnrollService]
})
export class AgComponent {
  title ='Angular'

  constructor(private enrollClicked: EnrollService){
    
  }

  Enroll() {
     this.enrollClicked.onEnrollClicked(this.title);
    }
}

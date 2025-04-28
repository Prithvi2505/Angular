import { EnrollService } from './../Services/enroll.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-js',
  standalone: false,
  templateUrl: './js.component.html',
  styleUrl: './js.component.css',
  providers:[EnrollService],
})
export class JsComponent {
  title ='JavaScript'

  constructor(private enrollClicked: EnrollService ){

  }

  Enroll() {
    this.enrollClicked.onEnrollClicked(this.title);
  }
}

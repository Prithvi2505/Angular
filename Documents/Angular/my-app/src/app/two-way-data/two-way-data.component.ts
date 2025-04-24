import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-data',
  standalone: false,
  templateUrl: './two-way-data.component.html',
  styleUrl: './two-way-data.component.css'
})
export class TwoWayDataComponent {
  username !: string ;
}

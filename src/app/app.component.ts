import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-root',
  standalone: true,  // ✅ Add this line
  imports: [RouterOutlet, NzLayoutModule],  // ✅ Import NzLayoutModule here
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ServiceBooking-Frontend';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular18-PWA testing Badging API';

  ngOnInit(): void {
    if ('setAppBadge' in navigator) {
      // Badging API is supported
      console.log('The Badging API is supported!');

      // Try to display a number in the badge
      try {
        navigator
          .setAppBadge(123)
          .then(() => {
            console.log('Badge set to 123');
          })
          .catch((error) => {
            console.error('Error setting badge:', error);
          });
      } catch (error) {
        console.error('Error setting badge in try-catch:', error);
      }
    } else {
      console.log('The Badging API is not supported in this browser.');
    }
  }
}

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  myrouter?: Router;

  @Input()
  title?: string;
  constructor(private router: Router) {
    this.myrouter = router;
  }
  getUrl(): string | undefined {
    return this.myrouter?.url;
  }
}

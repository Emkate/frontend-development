import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public activeRoute;

  constructor(router: Router) {
    router.events.subscribe((value) => {
      if (value instanceof NavigationEnd) {
        this.activeRoute = value.urlAfterRedirects;
      }
    });
  }

  ngOnInit() {
  }

  onNavbarIconClick() {
    document.getElementById('navbar-icon').classList.toggle('navbar-icon--open');
    document.getElementById('navbar').classList.toggle('navbar--open');
  }

}

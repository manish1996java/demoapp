import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verticle-navigation',
  templateUrl: './verticle-navigation.component.html',
  styleUrls: ['./verticle-navigation.component.scss']
})
export class VerticleNavigationComponent implements OnInit {
  activeFragment = this.route.fragment.pipe();

  constructor(public route: ActivatedRoute){}

  ngOnInit(): void {
  }

}

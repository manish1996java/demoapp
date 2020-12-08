import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit , DoCheck{
  activeFragment = this.route.fragment.pipe();

  constructor(public route: ActivatedRoute){}
  ngDoCheck(): void {
  }
  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GetAuthorizationService } from '../get-authorization.service';

@Component({
  selector: 'app-link-car',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './link-car.component.html',
  styleUrl: './link-car.component.scss'
})
export class LinkCarComponent {
  response: any;
  // Get Bearer token: Send username password of client to retrieve token
  // Do POST api call
  constructor(private apiService: GetAuthorizationService) {}

  ngOnInit() {
    this.apiService.getBearerToken().subscribe((data: any[]) => {
      this.response = data;
      
    });
  }
}

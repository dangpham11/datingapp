import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Changed 'styleUrl' to 'styleUrls'
})
export class AppComponent implements OnInit {
  title = 'Dating App';
  users: any;

  constructor(
    private http: HttpClient,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.setCurrentUser();
  }

  setCurrentUser() {
    const userString: string | null = localStorage.getItem('user');
    if (userString) {
      const user: User = JSON.parse(userString);
      this.accountService.setCurrentUser(user);
    } else {
      console.log('User not found in localStorage');
    }
  }
  getUsers() {
    this.http.get('https://localhost:7108/api/Users').subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

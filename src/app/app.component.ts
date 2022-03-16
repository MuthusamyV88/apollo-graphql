import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'apollo-graphql';
  users: { data: [{ userId: string, firstName: string, lastName:string }], key: string, display: string } = <any>{};
  constructor(private apollo: Apollo) { }
  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: gql`
        {
          user {
            key
            display
            data {
              userId
              firstName
              lastName
            }
          }
        }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.users = result?.data?.user;
      });
  }

  // ngOnInit() {

  // }
}


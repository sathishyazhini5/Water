import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cwps',
  templateUrl: './cwps.component.html',
  styleUrls: ['./cwps.component.css']
})
export class CwpsComponent {
  apiData: any; 

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
    this.http.get('http://localhost:7000/api/getdata')
      .subscribe((response: any) => {
        this.apiData = response.data; 
      });
  }

}

import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css'
})
export class PaymentsComponent implements OnInit{

  public payments : any;
  public dataSource : any;
  public displayedColumns =['id','date','amount','type','status','firstName'] ;


  @ViewChild(MatPaginator) paginator! : MatPaginator;
  ngOnInit(): void {
    this.http.get("http://localhost:8020/payments")
      .subscribe({
        next : data => {
          this.payments = data;
          this.dataSource = new MatTableDataSource(this.payments)
          this.dataSource.paginator = this.paginator;
        },
        error : err => {
          console.log(err)
        }
      })
  }

  constructor(private http : HttpClient) {
  }

}

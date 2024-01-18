import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  staff:any[]= [];

  constructor(private staffService:StaffService) { }
  
  ngOnInit() {
    this.staffService.getStaff().subscribe((data) => {
      this.staff = data;
    });
  }
}




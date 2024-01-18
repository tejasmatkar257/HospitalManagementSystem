import { Component } from '@angular/core';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent {

  newStaffMember: any = {
    name: '',
    role: '',
    gender: '',
    age: 0
  };

  constructor(private staffService: StaffService) { }
  
   addStaffMember() {
    this.staffService.addStaff(this.newStaffMember).subscribe((data) => {
      console.log('Staff member added:', data);
      // You can update the UI or perform other actions after adding the staff member
    });
  }

}

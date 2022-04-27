import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';
import { User } from '../../user';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  personalList!: Observable<User[]>

  ngOnInit(): void {
    this.personalList = this.adminService.getPersonalList()
  }
}

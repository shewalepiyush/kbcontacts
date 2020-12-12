import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent implements OnInit {

  contacts = "";
  index=0;
  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
    this.getContacts()
  }

  getContacts(){
    console.log("started")
    this.contactService.getContacts().subscribe(response=>{
      console.log(response)
      if (response['status'] == 'success') {
        this.contacts = response['data']
      } else{
        console.log(response)
      }
    })
    }

}

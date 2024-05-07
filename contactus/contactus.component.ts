import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CampaignsService } from '../campaigns.service';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent{

  submitted = false;
 
  constructor(private http: HttpClient) { }

  submitForm(form: NgForm) {
    if (form.valid) {
      const formData = form.value;
      this.http.post<any>('https://contacttechguideapi.onrender.com/contact', formData)
        .subscribe(
          () => {
            this.submitted = true;
            console.log("send sucessfully!");
            
            // this.message = 'Message sent successfully!';
          },
          (error) => {
            console.error('Error:', error);
            console.log("faild to send!");

            // this.message = 'Failed to send message. Please try again later.';
          }
        );
    }
  }


  
}
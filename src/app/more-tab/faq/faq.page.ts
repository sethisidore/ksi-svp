import { Component, OnInit } from '@angular/core';

import { SupportService } from '../support.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
  Questions: Array<{ question: string, answer: string }> = [
    { question: 'How to Vote', answer: 'First you must do this and that and ...'},
    { question: 'Can I register as a voter online', answer: `No! all registration process is carried out by INEC,
    visit any centre closer to you to register`},
    { question: 'How to authenticate', answer: `enter your VIN and mobile number and wait for an otp to be sent to your phone,
     then proceed to enter the number. NOTE: no two persons can share the same number`}
  ];
  FAQs: [];

  constructor(
    private supportService: SupportService
    ) { }

  ngOnInit() {
    this.supportService.getFAQs().subscribe(data =>{
      this.FAQs = data;
    });
  }
}

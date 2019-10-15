import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

import { AdminService } from '../admin.service';
import { Party } from 'src/app/voting-tab/voting.service';

@Component({
  selector: 'app-manage-parties',
  templateUrl: './manage-parties.page.html',
  styleUrls: ['./manage-parties.page.scss'],
})
export class ManagePartiesPage implements OnInit {
  partyForm: FormGroup;
  @Input() partyToEdit: Party;

  constructor(
    private adminService: AdminService,
    private fb: FormBuilder,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    if (this.partyToEdit) {
      this.partyForm = this.fb.group(this.partyToEdit)
    } else {
      this.partyForm = this.fb.group({
        name: ['', Validators.required],
        initials: ['', [Validators.pattern(/[A-Z]{1,4}/), Validators.required]],
        logo: ['', Validators.required],
        restrictions: [['']],
      });
    } 
  }

  onDismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  onSubmit() {
    return this.adminService.createParty(this.partyForm.value).subscribe();
  }
}

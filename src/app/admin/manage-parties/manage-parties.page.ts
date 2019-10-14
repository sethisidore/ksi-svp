import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController } from '@ionic/angular';

import { AdminService } from '../admin.service';
import { Party } from 'src/app/voting-tab/voting.service';

@Component({
  selector: 'app-manage-parties',
  templateUrl: './manage-parties.page.html',
  styleUrls: ['./manage-parties.page.scss'],
})
export class ManagePartiesPage implements OnInit {
  managePartyForm: FormGroup;
  AllParties: Party[];

  constructor(
    private adminService: AdminService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.adminService.getParties().subscribe(resp => {
      this.AllParties = resp;
    });
  }

  onAdd() {
    this.managePartyForm = this.fb.group({
      initials: ['', [Validators.pattern(/[A-Z]{2,4}/), Validators.required]],
      name: ['', Validators.required],
      logo: ['', Validators.required],
      restrictions: [['']]
    });
  }

  onEdit(party: Party) {
    return this.managePartyForm = this.fb.group(party);
  }

  onSubmit() {
    return this.adminService.createParty(this.managePartyForm.value);
  }

  onSave() {
    return this.adminService.updateParty(this.managePartyForm.value);
  }
}

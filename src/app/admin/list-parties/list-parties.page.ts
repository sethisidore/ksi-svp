import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { AdminService } from '../admin.service';
import { Party } from 'src/app/voting-tab/voting.service';
import { ManagePartiesPage } from '../manage-parties/manage-parties.page';


@Component({
  selector: 'app-add-party',
  templateUrl: './list-parties.page.html',
  styleUrls: ['./list-parties.page.scss'],
})
export class ListPartiesPage implements OnInit {
  AllParties: Party[];

  constructor(
    private adminService: AdminService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.adminService.getParties().subscribe(resp => {
      this.AllParties = resp;
    });
  }

  async onAddModal() {
    const modal = await this.modalController.create({
      component: ManagePartiesPage
    });
    return await modal.present();
  }

  async onEdit(party: Party) {
    const modal = await this.modalController.create({
      component: ManagePartiesPage,
      componentProps: {
        'partyToEdit': party
      }
    });
    return await modal.present();

    /*const { data } = await modal.onDidDismiss();
    this.AllParties.push(data);*/
  }
}

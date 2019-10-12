import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Plugins } from '@capacitor/core';

import { VotingService, Party, ElectionRequestOptions } from '../voting.service';

const { Modals } = Plugins;

@Component({
  selector: 'app-cast-ballot',
  templateUrl: './cast-ballot.page.html',
  styleUrls: ['./cast-ballot.page.scss'],
})
export class CastBallotPage implements OnInit {
  @Input() type: ElectionRequestOptions['type'];
  @Output() typeChange = new EventEmitter();

  castBallotForm: FormGroup;
  partyList: Array<Party>;
  customPopoverOptions: any = {
    header: `${this.type} List`,
    subheader: 'Select your Choice',
    message: 'You can only pick one choice! Select wisely'
  };

  constructor(
    private fb: FormBuilder,
    private votingService: VotingService
    ) { }

  ngOnInit() {
    this.votingService.requestBallot(this.type).subscribe((resp) => {
      this.partyList = resp.parties;
    });

    this.castBallotForm = this.fb.group({
      choice: ['', Validators.required],
      reConfirm: ['', Validators.required]
    });
  }

  onSubmit() {
    const encrypted = this.encryptVote();
    this.votingService.castBallot(encrypted).subscribe();
  }

  async showPromptBeforeSubmit() {
    await Modals.prompt({
      title: `Review ${this.type} Selection`,
      message: `
      <ion-item>
        <ion-text>Your ${this.type} choice is: ${this.castBallotForm.value}</ion-text>
      </ion-item>
      `,
      cancelButtonTitle: 'Cancel',
      okButtonTitle: 'Continue'
    });
  }

  compareWith = (early: Party, later: Party) => {
    return early && later ? early.initials === later.initials : early === later;
  }

  updateType() {
    this.typeChange.emit();
  }

  encryptVote() {
    return this.votingService.encryptBallot(this.castBallotForm.value);
  }

  trackParty(index: number, element: Party) {
    return element ? element.initials : null;
  }
}

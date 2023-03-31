import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  orignalUserSettings: UserSettings | any = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };

  userSettings: UserSettings = {...this.orignalUserSettings};
  constructor() {}

  ngOnInit(): void {
  }

  onSubmit(form:NgForm) {
    console.log('form', form)
  }

  onBlur(field: NgModel) {
    console.log('onblue', field.valid)
  }
}

import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
})
export class InputsPage implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    birthday: new Date(),
    note: ''
  }

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async onSubmit() { 
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Success!',
      buttons: [{
        text: 'Okay',
        handler: (data) => { }
      }]
    });

    alert.present();
  }

}

class User {
  firstName: string;
  lastName: string;
  birthday: Date;
  note: string;
}
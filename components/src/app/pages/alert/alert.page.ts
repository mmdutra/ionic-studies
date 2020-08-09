import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  protected title: string = 'Alert page';

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Nome'
        }
      ],
      buttons: [{
        text: 'Cancel',
        role: 'text-danger',
        handler: (data) => {
          console.log(`Confirm cancel ${data}`);
        }
      }, {
        text: 'Okay',
        handler: (data) => {
          this.title = data.name;
        }
      }]
    });

    await alert.present();
  }

  favorite(): void {
    alert("favorite");
  }

  share(): void {
    alert("share");
  }

  unread(): void {
    alert("unread");
  }

}

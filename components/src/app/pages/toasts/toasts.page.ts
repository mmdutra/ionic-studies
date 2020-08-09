import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.page.html',
  styleUrls: ['./toasts.page.scss'],
})
export class ToastsPage implements OnInit {

  constructor(private toast: ToastController) { }

  ngOnInit() {
  }

  async showToast() {
    const toast = await this.toast.create({
      message: 'You have clicked on the button!',
      position: 'top',
      duration: 2000,
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }
      ]
    });

    toast.present();
  }

}

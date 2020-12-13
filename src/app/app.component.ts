import { Component } from '@angular/core';

import { Platform, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ModalSignComponent } from './componentes/modal-sign/modal-sign.component';
import { DataLocalService } from './services/data-local.service';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private modalCtrl: ModalController,
    private dlService: DataLocalService,
    public authService: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.splashScreen.show();
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.dlService.omitirModalSign().then( data => {
        console.log(data);
        if (data === null || data !== true) {
          this.abrirModalSign();
        }
      });
    });
  }

  async abrirModalSign() {
    const sign = await this.modalCtrl.create({
      component: ModalSignComponent,
      id: 'sign',
      componentProps: { inicio: true }
    });

    await sign.present();

    await sign.onDidDismiss().then(data => {
      if (data.role === 'omitir') {
        this.dlService.guardarOmitirModalSign();
      }
    }).catch( e => console.log(e));
  }
}

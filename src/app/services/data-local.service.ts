import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  constructor( private storage: Storage) { }

  async guardarOmitirModalSign() {
    await this.storage.set('omitir', true);
  }
  
  async omitirModalSign() {
    return await this.storage.get('omitir');
  }
}

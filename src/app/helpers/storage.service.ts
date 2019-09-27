import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async getObject(key: string) {
    const res = await Storage.get({ key });
    return JSON.parse(res.value);
  }

  async setObject(key: string, value: any) {
    await Storage.set({
      key,
      value: JSON.stringify(value) });
  }

  async setItem(key: string, value: string) {
    await Storage.set({key, value});
  }

  async getItem(key: string) {
    await Storage.get({ key });
  }

  async removeItem(key) {
    await Storage.remove({ key });
  }

  async clear() {
    await Storage.clear();
  }

  async keys() {
    await Storage.keys();
  }
}

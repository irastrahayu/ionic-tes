import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: 'history.page.html',
  styleUrls: ['history.page.scss'],
})
export class HistoryPage {
  formData: { nama: string, nik: string, alamat: string, message: string, latitude: number, longitude: number}[] = [];

  constructor() {}

  ionViewDidEnter() {
    this.loadFormData();
  }

  loadFormData() {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      this.formData = JSON.parse(storedData);
    }
  }
}

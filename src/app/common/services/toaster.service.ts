import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  constructor() { }

  showToaster(_toastType: string, _toastTitle: string, _message: string, _showToast: boolean, _displayTime: number) { }

}

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog-component',
  templateUrl: './error-dialog-component.component.html',
  styleUrls: ['./error-dialog-component.component.css']
})
export class ErrorDialogComponentComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { errorMessage: string }) { }

}

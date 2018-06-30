import { Component, OnInit, InjectionToken , Inject, Input} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { concat } from 'rxjs/internal/observable/concat';
import { PoActionService } from '../../shared/poactions.services';
import { MAT_DIALOG_DATA, MatDialogRef  } from '@angular/material';
import { FormBuilder } from '@angular/forms/src/form_builder';
import { Observable } from 'rxjs/internal/Observable';

// export const DIALOG_DATA = new InjectionToken('DIALOG_DATA');

@Component({
  selector: 'app-po-add-items-form',
  templateUrl: './po-add-items-form.component.html',
  styleUrls: ['./po-add-items-form.component.less']
})
export class PoAddItemsFormComponent implements OnInit {

  public signupForm: FormGroup;
  hsCode;
  test;
  showDialogClose = false;
  addItemsData;
  @Input() itemsLen;
  constructor(
    private poactions: PoActionService,
    // @Inject(MAT_DIALOG_DATA) data: any
    public dialogRef: MatDialogRef<PoAddItemsFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'itemId': new FormControl(null),
      'itemname': new FormControl(null, Validators.required),
      'itemcode': new FormControl(null),
      'itemprice': new FormControl(null, [Validators.required]),
      'itemunits': new FormControl(null, [Validators.required]),
      'itemdesc': new FormControl(null),
      'hscode': new FormControl(null, this.checkhsCode),
      'htscode': new FormControl(null, this.checkhtsCode),
      'uom': new FormControl(null),
    });
    this.dialogRef.afterOpen().subscribe(
      result => {
        console.log(result);
        const obj = this.poactions.getEditItem();
        this.signupForm.setValue(obj);
        this.showDialogClose = true;
      }
    );
  }

  closeDialog() {
    this.dialogRef.close();
  }

  checkValue(str) {
    this.hsCode = str;
  }

  saveEditedData() {
    this.poactions.saveEditedItem(this.signupForm.value);
    this.dialogRef.close();
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.value.itemId = this.itemsLen + 1;
    this.poactions.poaddItems(this.signupForm.value);
    this.signupForm.reset();
  }
  checkhsCode(control: FormControl) {
    if (control.value) {
      const val = control.value.toString();
      if (val.length < 6 && val.length) {
        return { 'hsCodeVal': true};
      }
      return null;
    }
  }
  checkhtsCode(control: FormControl) {
    if (control.value) {
      const val = control.value.toString();
      if (val.length !== 10 && val.length) {
        return { 'htsCodeVal': true};
      }
      return null;
    }
  }

}

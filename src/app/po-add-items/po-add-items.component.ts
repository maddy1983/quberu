import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as _ from 'lodash';
import { PoActionService } from '../shared/poactions.services';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PoAddItemsFormComponent } from './po-add-items-form/po-add-items-form.component';

@Component({
  selector: 'app-po-add-items',
  templateUrl: './po-add-items.component.html',
  styleUrls: ['./po-add-items.component.less']
})
export class PoAddItemsComponent implements OnInit {
  addItemsData;
  total_val;
  constructor(
    private poactions: PoActionService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.addItemsData = this.poactions.getAddItems();
    this.total_val = this.getTotal(this.addItemsData);
    this.poactions.poaddedItems.subscribe(
      (data) => {
        this.addItemsData = data;
        this.total_val = this.getTotal(data);
      }
    );
  }

  editItem(obj) {
    this.poactions.getPoEditItem(obj);
    this.dialog.open(PoAddItemsFormComponent, {
      data: obj
    });
  }

  deleteItem(obj) {
    this.poactions.deletePoItm(obj);
  }

  getTotal(arr) {
    let total = 0;
    _.map(this.addItemsData, (o) => {
      total += o.itemprice * o.itemunits;
    });
    return total;
  }

}

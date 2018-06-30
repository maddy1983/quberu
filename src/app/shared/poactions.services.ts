import { Injectable, Output, EventEmitter } from '@angular/core';
import {  } from '@angular/core/src/metadata/directives';

@Injectable()
export class PoActionService {
    @Output() poaddedItems = new EventEmitter();
    po_edit_item;
    po_addItemsData = [
        {
            'itemId': 1,
            'itemname': 'iPhone3',
            'itemcode': 'code3',
            'itemprice': 256.39,
            'itemunits': 190,
            'itemdesc': 'Gud to buy',
            'hscode': 987654,
            'htscode': 9889988987,
            'uom': 'each',
        },
        {
            'itemId': 2,
            'itemname': 'iPhone4',
            'itemcode': 'code4',
            'itemprice': 296.39,
            'itemunits': 550,
            'itemdesc': 'Gud to buy',
            'hscode': 987654,
            'htscode': 9889988987,
            'uom': 'each',
        },
        {
            'itemId': 3,
            'itemname': 'iPhone5',
            'itemcode': 'code5',
            'itemprice': 340.39,
            'itemunits': 320,
            'itemdesc': 'Gud to buy',
            'hscode': '',
            'htscode': '',
            'uom': 'each',
          }
      ];
    constructor() {}

    getAddItems() {
        return this.po_addItemsData;
    }
    getEditItem() {
        return this.po_edit_item;
    }
    deletePoItm(obj) {
        for (let i = 0; i < this.po_addItemsData.length; i++) {
            if (obj.itemId === this.po_addItemsData[i].itemId) {
                this.po_addItemsData.splice(i , 1);
            }
        }
        this.poaddedItems.emit(this.po_addItemsData);
    }
    saveEditedItem(obj) {
        for (let i = 0; i < this.po_addItemsData.length; i++) {
            if (obj.itemId === this.po_addItemsData[i].itemId) {
                this.po_addItemsData.splice(i , 1, obj);
            }
        }
        this.poaddedItems.emit(this.po_addItemsData);
    }
    getPoEditItem(obj) {
        this.po_edit_item = obj;
    }
    poaddItems(obj) {
        this.po_addItemsData.push(obj);
        this.poaddedItems.emit(this.po_addItemsData);
    }
}

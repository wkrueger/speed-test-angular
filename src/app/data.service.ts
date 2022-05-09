import { Injectable } from '@angular/core';

interface CheckItem {
  name: string;
  view: boolean;
  create: boolean;
  update: boolean;
  delete: boolean;
}

@Injectable()
export class DataService {
  modes = ['view', 'create', 'update', 'delete'];

  data: CheckItem[] = [];

  constructor() {
    for (let it = 0; it < 100; it++) {
      this.data.push({
        name: 'Nome',
        view: false,
        create: false,
        update: false,
        delete: false,
      });
    }
  }
}

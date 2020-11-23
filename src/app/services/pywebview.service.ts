import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PywebviewService {

  api: { unlock_door(): void };

  constructor() { }
}

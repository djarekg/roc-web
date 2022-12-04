import { Injectable, inject } from '@angular/core';

import { StorageBase } from '../models/storage-base';
import { SESSION_STORAGE } from '../tokens';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService extends StorageBase {
  protected override storage: Storage | null = inject(SESSION_STORAGE);
}

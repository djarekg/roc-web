import { inject, Injectable } from '@angular/core';

import { StorageBase } from '../storage-base';
import { SESSION_STORAGE } from '../tokens';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService extends StorageBase {
  protected override storage: Storage | null = inject(SESSION_STORAGE);
}

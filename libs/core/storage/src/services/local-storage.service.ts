import { Injectable, inject } from '@angular/core';

import { StorageBase } from '../models/storage-base';
import { LOCAL_STORAGE } from '../tokens';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService extends StorageBase {
  protected override storage: Storage | null = inject(LOCAL_STORAGE);
}

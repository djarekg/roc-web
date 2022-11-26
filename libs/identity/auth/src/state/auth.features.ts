import { createFeature } from '@ngrx/store';

import { authFeatureKey, reducers } from './reducers';

export const authFeature = createFeature({
  name: authFeatureKey,
  reducer: reducers,
});

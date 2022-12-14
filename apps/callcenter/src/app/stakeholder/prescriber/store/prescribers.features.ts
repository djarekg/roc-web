import { createFeature } from '@ngrx/store';

import { featureKey, reducers } from './reducers';

export const prescribersFeature = createFeature({
  name: featureKey,
  reducer: reducers,
});

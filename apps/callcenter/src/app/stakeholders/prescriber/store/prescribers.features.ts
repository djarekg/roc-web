import { createFeature } from '@ngrx/store';

import { prescribersFeatureKey, reducers } from './reducers';

export const prescribersFeature = createFeature({
  name: prescribersFeatureKey,
  reducer: reducers,
});

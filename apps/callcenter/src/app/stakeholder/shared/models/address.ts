import { type Entity } from '@roc-web/core/shared';

import { type Auditable } from './auditable';
import { type Country } from './country';
import { type State } from './state';

export interface Address extends Entity, Auditable {
  address1: string;
  address2: string;
  city: string;
  country: Country;
  countryId: string;
  name: string;
  postalCode: string;
  state: State;
  stateId: string;
}

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { Prescriber } from '../../models';
import {
  prescriberActions,
  prescriberCollectionApiActions,
  prescribersApiActions,
  viewPrescriberPageActions,
} from '../actions';

export const prescribersFeatureKey = 'prescribers';

export interface State extends EntityState<Prescriber> {
  selectedPrescriberId: string | null;
}

export const adapter: EntityAdapter<Prescriber> =
  createEntityAdapter<Prescriber>({
    selectId: (prescriber: Prescriber) => prescriber.id,
    sortComparer: false,
  });

export const initialState: State = adapter.getInitialState({
  selectedPrescriberId: null,
});

export const reducer = createReducer(
  initialState,
  on(
    prescribersApiActions.searchSuccess,
    prescriberCollectionApiActions.loadPrescriberSuccess,
    (state, { prescribers }) => adapter.addMany(prescribers, state)
  ),
  on(prescriberActions.loadPrescriber, (state, { prescriber }) =>
    adapter.addOne(prescriber, state)
  ),
  on(
    viewPrescriberPageActions.selectPrescriber,
    (state, { id }): State => ({
      ...state,
      selectedPrescriberId: id,
    })
  )
);

export const selectId = (state: State) => state.selectedPrescriberId;

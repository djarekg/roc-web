import { createFeatureSelector, createSelector } from '@ngrx/store';
import { type ViewModel } from '@roc-web/core/shared';

import { type Prescriber, type PrescriberList } from '../../models';
import { type PrescriberState, featureKey } from '../reducers';
import * as fromPrescribers from '../reducers/prescribers.reducers';

export const selectPrescribersState =
  createFeatureSelector<PrescriberState>(featureKey);

export const selectPrescriberEntitiesState = createSelector(
  selectPrescribersState,
  state => state.prescribers,
);

export const selectPrescribers = createSelector(
  selectPrescriberEntitiesState,
  fromPrescribers.getEntities,
);

export const selectFilter = createSelector(
  selectPrescriberEntitiesState,
  fromPrescribers.getFilter,
);

export const selectLoaded = createSelector(
  selectPrescriberEntitiesState,
  fromPrescribers.getLoaded,
);

export const selectLoading = createSelector(
  selectPrescriberEntitiesState,
  fromPrescribers.getLoading,
);

export const selectPagination = createSelector(
  selectPrescriberEntitiesState,
  fromPrescribers.getPagination,
);

export const selectSelected = createSelector(
  selectPrescriberEntitiesState,
  fromPrescribers.getSelected,
);

export const selectSelectedLoaded = createSelector(
  selectPrescriberEntitiesState,
  fromPrescribers.getSelectedLoaded,
);

export const selectSort = createSelector(
  selectPrescriberEntitiesState,
  fromPrescribers.getSort,
);

export const selectPrescribersFlatten = createSelector(
  selectPrescribers,
  prescribers =>
    /* return prescribers.flatMap(item => {*/ /*   return*/ /* });*/ /* return prescribers.flatMap(item => {*/ /*   return*/ /* });*/ prescribers.flatMap(
      (item: Readonly<Prescriber>) => {
        return {
          id: item.id,
          externalId: item.stakeholder.externalId,
          firstName: item.stakeholder.firstName,
          lastName: item.stakeholder.lastName,
          nationalId: item.nationalId,
        };
      },
    ) as unknown as Readonly<PrescriberList>[],
);

export const selectViewModel = createSelector(
  selectLoading,
  selectPrescribersFlatten,
  selectPagination,
  (loading, prescribers, pagination): ViewModel<PrescriberList> => ({
    loading: true,
    entities: prescribers,
    ...pagination,
  }),
);

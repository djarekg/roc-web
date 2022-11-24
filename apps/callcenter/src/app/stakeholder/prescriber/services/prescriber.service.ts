import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Observable } from 'rxjs';

import { Endpoints } from '@roc-web/callcenter/shared/models';
import { Prescriber } from '@roc-web/callcenter/stakeholder/prescriber/models';
import {
  createHttpPaginationParams,
  EntityListRespones,
  Pagination,
} from '@roc-web/web';

@Injectable()
export class PrescriberService {
  #http = inject(HttpClient);

  add(prescriber: Prescriber): Observable<Prescriber> {
    return this.#http.post<Prescriber>(Endpoints.prescribers, prescriber);
  }

  get(
    pagination: Pagination,
    sort: Sort
  ): Observable<EntityListRespones<Prescriber>> {
    const params = createHttpPaginationParams(pagination, sort);

    return this.#http.get<EntityListRespones<Prescriber>>(
      Endpoints.prescribers,
      {
        params,
      }
    );
  }

  getById(id: string): Observable<Prescriber> {
    const url = `${Endpoints.prescribers}/${id}`;

    return this.#http.get<Prescriber>(url);
  }

  remove(prescriber: Prescriber): Observable<Prescriber> {
    const { id } = prescriber;
    const url = `${Endpoints.prescribers}/${id}`;
    return this.#http.delete<Prescriber>(url);
  }

  search(filter: string): Observable<EntityListRespones<Prescriber>> {
    const url = `${Endpoints.prescribers}/search/${filter}`;
    return this.#http.get<EntityListRespones<Prescriber>>(url);
  }

  update(prescriber: Prescriber): Observable<Prescriber> {
    const { id } = prescriber;
    const url = `${Endpoints.prescribers}/${id}`;
    return this.#http.put<Prescriber>(url, prescriber);
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Observable, throwError } from 'rxjs';

import { Endpoints } from '@roc-web/callcenter/shared/models';
import { Prescriber } from '@roc-web/callcenter/stakeholder/prescriber/models';
import {
  createHttpPaginationParams,
  EntityListRespone,
  Pagination,
} from '@roc-web/web';

@Injectable()
export class PrescriberService {
  #http = inject(HttpClient);

  add(prescriber: Prescriber): Observable<Prescriber> {
    return this.#http.post<Prescriber>(Endpoints.prescribers, prescriber);
  }

  get(id: string | null): Observable<Readonly<Prescriber>> {
    if (!id) {
      return throwError(() => new Error('Parameter cannot be null'));
    }

    const url = `${Endpoints.prescribers}/${id}`;

    return this.#http.get<Readonly<Prescriber>>(url);
  }

  getAll(
    pagination: Pagination,
    sort: Sort
  ): Observable<EntityListRespone<Prescriber>> {
    const params = createHttpPaginationParams(pagination, sort);

    return this.#http.get<EntityListRespone<Prescriber>>(
      Endpoints.prescribers,
      {
        params,
      }
    );
  }

  remove(prescriber: Prescriber): Observable<Prescriber> {
    const { id } = prescriber;
    const url = `${Endpoints.prescribers}/${id}`;
    return this.#http.delete<Prescriber>(url);
  }

  search(filter: string): Observable<EntityListRespone<Prescriber>> {
    const url = `${Endpoints.prescribers}/search/${filter}`;
    return this.#http.get<EntityListRespone<Prescriber>>(url);
  }

  update(prescriber: Prescriber): Observable<Prescriber> {
    const { id } = prescriber;
    const url = `${Endpoints.prescribers}/${id}`;
    return this.#http.put<Prescriber>(url, prescriber);
  }
}

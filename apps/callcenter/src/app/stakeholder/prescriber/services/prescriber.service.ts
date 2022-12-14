import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { type Sort } from '@angular/material/sort';
import { type Pagination } from '@roc-web/core';
import { createHttpPaginationParams } from '@roc-web/web/http';
import { type EntityListRespone } from '@roc-web/web/shared';
import { type Observable, throwError } from 'rxjs';

import { Endpoints } from '../../../shared/models';
import { type Prescriber } from '../models';

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
    filter: string | null,
    pagination: Pagination,
    sort: Sort,
  ): Observable<EntityListRespone<Prescriber>> {
    const params = createHttpPaginationParams(filter, pagination, sort);

    return this.#http.get<EntityListRespone<Prescriber>>(Endpoints.prescribers, {
      params,
    });
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

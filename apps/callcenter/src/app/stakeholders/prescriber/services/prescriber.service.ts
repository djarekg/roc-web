import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  createHttpParams,
  PaginatedEntityResponse,
  PaginationOptions,
} from '@roc-web/web';

import { Endpoints } from '../../../shared/models';
import { Prescriber } from '../models';

@Injectable()
export class PrescriberService {
  #http = inject(HttpClient);

  add(prescriber: Prescriber): Observable<Prescriber> {
    return this.#http.post<Prescriber>(Endpoints.prescribers, prescriber);
  }

  get(
    options?: PaginationOptions
  ): Observable<PaginatedEntityResponse<Prescriber>> {
    if (!options) {
      options = {
        pageIndex: 0,
        pageSize: 10,
        sort: {
          active: 'date',
          direction: 'asc',
        },
      };
    }
    const params = createHttpParams(options);

    return this.#http.get<PaginatedEntityResponse<Prescriber>>(
      Endpoints.prescribers,
      {
        params,
      }
    );
  }

  getById(id: string): Observable<Prescriber> {
    const url = `${Endpoints.prescribers.toString()}/${id}`;

    return this.#http.get<Prescriber>(url);
  }

  remove(prescriber: Prescriber): Observable<Prescriber> {
    const url = `${Endpoints.prescribers}/${prescriber.id}`;
    return this.#http.delete<Prescriber>(url);
  }

  search(filter: string): Observable<PaginatedEntityResponse<Prescriber>> {
    const url = `${Endpoints.prescribers}/search/${filter}`;
    return this.#http.get<PaginatedEntityResponse<Prescriber>>(url);
  }

  update(prescriber: Prescriber): Observable<Prescriber> {
    const url = `${Endpoints.prescribers}/${prescriber.id}`;
    return this.#http.put<Prescriber>(url, prescriber);
  }
}

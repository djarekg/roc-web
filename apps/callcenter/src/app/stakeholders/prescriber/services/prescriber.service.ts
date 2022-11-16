import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Endpoints } from '@roc-web/callcenter/shared/models';
import {
  createHttpParams,
  PaginatedEntityResponse,
  PaginationOptions,
} from '@roc-web/web';

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
        filter: '',
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
    return this.#http.get<Prescriber>(`${Endpoints.prescribers}/${id}`);
  }

  remove(prescriber: Prescriber): Observable<Prescriber> {
    return this.#http.delete<Prescriber>(
      `${Endpoints.prescribers}/${prescriber.id}`
    );
  }

  search(query: string): Observable<PaginatedEntityResponse<Prescriber>> {
    return this.#http.get<PaginatedEntityResponse<Prescriber>>(
      `${Endpoints.prescribers}/search/${query}`
    );
  }

  update(prescriber: Prescriber): Observable<Prescriber> {
    return this.#http.put<Prescriber>(
      `${Endpoints.prescribers}/${prescriber.id}`,
      prescriber
    );
  }
}

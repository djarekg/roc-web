import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Endpoints } from '@roc-web/callcenter/shared/models';
import {
  Prescriber,
  PrescriberPaginationOptions,
} from '@roc-web/callcenter/stakeholder/prescriber/models';
import { createHttpParams, PaginationEntityResponse } from '@roc-web/web';

@Injectable()
export class PrescriberService {
  #http = inject(HttpClient);

  add(prescriber: Prescriber): Observable<Prescriber> {
    return this.#http.post<Prescriber>(Endpoints.prescribers, prescriber);
  }

  get(
    options: PrescriberPaginationOptions
  ): Observable<PaginationEntityResponse<Prescriber>> {
    const params = createHttpParams(options);

    return this.#http.get<PaginationEntityResponse<Prescriber>>(
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

  search(filter: string): Observable<PaginationEntityResponse<Prescriber>> {
    const url = `${Endpoints.prescribers}/search/${filter}`;
    return this.#http.get<PaginationEntityResponse<Prescriber>>(url);
  }

  update(prescriber: Prescriber): Observable<Prescriber> {
    const { id } = prescriber;
    const url = `${Endpoints.prescribers}/${id}`;
    return this.#http.put<Prescriber>(url, prescriber);
  }
}

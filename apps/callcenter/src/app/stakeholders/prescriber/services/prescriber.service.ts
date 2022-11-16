import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Endpoints } from '@roc-web/callcenter/shared/models';
import { PaginatedList, PaginationOptions } from '@roc-web/web';

import { createHttpParams } from '@roc-web/web';

import { Prescriber } from '../models';

@Injectable()
export class PrescriberService {
  #http = inject(HttpClient);

  addPrescriber(prescriber: Prescriber): Observable<Prescriber> {
    return this.#http.post<Prescriber>(Endpoints.prescribers, prescriber);
  }

  getPrescriber(id: string): Observable<Prescriber> {
    return this.#http.get<Prescriber>(`${Endpoints.prescribers}/${id}`);
  }

  getPrescribers(
    options: PaginationOptions
  ): Observable<PaginatedList<Prescriber>> {
    const params = createHttpParams(options);

    return this.#http.get<PaginatedList<Prescriber>>(Endpoints.prescribers, {
      params,
    });
  }

  removePrescriber(prescriber: Prescriber): Observable<Prescriber> {
    return this.#http.delete<Prescriber>(
      `${Endpoints.prescribers}/${prescriber.id}`
    );
  }

  searchPrescribers(query: string): Observable<PaginatedList<Prescriber>> {
    return this.#http.get<PaginatedList<Prescriber>>(
      `${Endpoints.prescribers}/search/${query}`
    );
  }

  updatePrescriber(prescriber: Prescriber): Observable<Prescriber> {
    return this.#http.put<Prescriber>(
      `${Endpoints.prescribers}/${prescriber.id}`,
      prescriber
    );
  }
}

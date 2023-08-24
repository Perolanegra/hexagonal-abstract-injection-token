import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SomeMockPatternService } from './some-mock-pattern.service';
import { SomePatternAdapterService } from './some-pattern-adapter.service';

@Injectable({
  providedIn: 'root',
  useFactory: () =>
    process.env['NX_MOCK_BACKEND']
      ? inject(SomeMockPatternService)
      : inject(SomePatternAdapterService),
})
export abstract class SomePatternPortService {
  abstract loadOne(id: string): Observable<unknown>;
  abstract loadAll(): Observable<unknown[]>;
  abstract create(payload: unknown): Observable<unknown>;
  abstract update(id: string, partial: unknown): Observable<unknown>;
}

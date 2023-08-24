import { Injectable } from "@angular/core";
import { SomePatternPortService } from "./some-pattern-abstract-port.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SomePatternAdapterService implements SomePatternPortService {
    loadOne(id: string): Observable<unknown> {
        throw new Error("Method not implemented.");
    }
    loadAll(): Observable<unknown[]> {
        throw new Error("Method not implemented.");
    }
    create(payload: unknown): Observable<unknown> {
        throw new Error("Method not implemented.");
    }
    update(id: string, partial: unknown): Observable<unknown> {
        throw new Error("Method not implemented.");
    }

}
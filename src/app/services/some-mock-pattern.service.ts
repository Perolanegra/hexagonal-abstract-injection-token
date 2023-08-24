import { Injectable } from "@angular/core";
import { SomePatternPortService } from "./some-pattern-abstract-port.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SomeMockPatternService implements SomePatternPortService {

    loadOne(id: string): Observable<unknown> {
        // Do all the logic here
        console.log('mock one');
        throw new Error("Eu estou no MOCK.");
    }
    loadAll(): Observable<unknown[]> {
        // Do all the logic here
        throw new Error("Method not implemented.");
    }
    create(payload: unknown): Observable<unknown> {
        throw new Error("Method not implemented.");
    }
    update(id: string, partial: unknown): Observable<unknown> {
        throw new Error("Method not implemented.");
    }

}
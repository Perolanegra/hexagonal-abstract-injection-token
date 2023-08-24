import { Component, OnInit, inject } from '@angular/core';
import { SomePatternPortService } from './services/some-pattern-abstract-port.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hexagonal-arch-abstraction';

  private readonly somePatternService = inject(SomePatternPortService);

  ngOnInit(): void {
    this.somePatternService.loadOne('12');
  }

}

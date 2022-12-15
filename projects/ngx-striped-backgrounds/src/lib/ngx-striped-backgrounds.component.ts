import { Component } from '@angular/core';

@Component({
  selector: 'lib-ngx-striped-backgrounds',
  template: `
    <div class="striped-bg"></div>

    <div class="vertical-striped-bg"></div>

    <div class="diagonal-striped-bg"></div>

    <div class="repeating-diagonal-striped-bg"></div>

    <div class="subtle-diagonal-striped-bg"></div>
  `,
  styleUrls: ['./ngx-striped-backgrounds.component.scss'],
})
export class NgxStripedBackgroundsComponent {}

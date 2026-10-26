import { Component } from '@angular/core';
import { Icon } from '../../../shared/ui/icon/icon';
import { NAV_ITEMS_MOBILE } from '../nav-items';

@Component({
  imports: [Icon],
  selector: 'app-header-mobile',
  styleUrl: './header-mobile.component.scss',
  templateUrl: './header-mobile.component.html',
})
export class HeaderMobileComponent {
  protected readonly items = NAV_ITEMS_MOBILE;
}

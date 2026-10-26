import { Component } from '@angular/core';
import { NAV_ITEMS, NAV_ITEMS_MOBILE } from '../nav-items';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Icon } from '../../../shared/ui/icon/icon';

@Component({
  imports: [RouterLink, RouterLinkActive, Icon],
  selector: 'app-sidebar-mobile',
  styleUrl: './sidebar-mobile.component.scss',
  templateUrl: './sidebar-mobile.component.html',
})
export class SidebarMobileComponent {
  protected readonly items = NAV_ITEMS_MOBILE;
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BP, matchBreakpoint } from './core/layout/breakpoint';
import { SidebarMobileComponent } from './core/layout/sidebar-mobile/sidebar-mobile.component';
import { SidebarComponent } from './core/layout/sidebar/sidebar.component';
import { HeaderMobileComponent } from './core/layout/header-mobile/header-mobile.component';

@Component({
  imports: [RouterOutlet, SidebarMobileComponent, SidebarComponent, HeaderMobileComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly isDesktop = matchBreakpoint(BP.md);
}

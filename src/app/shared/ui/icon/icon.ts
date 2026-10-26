import { Component, computed, input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import type { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faArrowDown, faArrowRight, faArrowsTurnToDots, faArrowUp, faBorderAll, faBoxesStacked, faBoxOpen, faPlus, faTags, type IconDefinition } from '@fortawesome/free-solid-svg-icons';

const ICONS = {
  cajaLogo: faBoxOpen,
  resumen: faBorderAll,
  productos: faBoxesStacked,
  movimientos: faArrowsTurnToDots,
  marcas: faTags,
  arriba: faArrowUp,
  abajo: faArrowDown,
  add: faPlus,
  derecha: faArrowRight

} satisfies Record<string, IconDefinition>;

export type IconName = keyof typeof ICONS;

@Component({
  selector: 'app-icon',
  imports: [FaIconComponent],
  template: `<fa-icon [icon]="icon()" [size]="size()" />`,
})
export class Icon {
  name = input.required<IconName>();
  size = input<SizeProp>('1x');

  protected readonly icon = computed(() => ICONS[this.name()]);
}

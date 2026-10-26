import { inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs';

export const BP = { md: '(min-width: 768px)', lg: '(min-width: 1024px)' } as const;

export function matchBreakpoint(query: string) {
  return toSignal(
    inject(BreakpointObserver).observe(query).pipe(map(r => r.matches)),
    { initialValue: false },
  );
}
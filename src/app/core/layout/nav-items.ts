import { faBox } from "@fortawesome/free-solid-svg-icons";
import { IconName } from "../../shared/ui/icon/icon";

export interface NavItem {
    label: string;
    route: string;
    icon: IconName
}

export const NAV_ITEMS: readonly NavItem[] = [
    {label: 'Resumen', route: '/dashboard', icon: 'resumen' },
    {label: 'Productos', route: '/productos', icon: 'productos'},
    {label: 'Movimientos', route: '/movimientos', icon: 'movimientos'},
    {label: 'Marcas y Proveedores', route: '/marcasproveedores', icon: 'marcas' }
];

export const NAV_ITEMS_MOBILE: readonly NavItem[] = [
    {label: 'Resumen', route: '/dashboard', icon: 'resumen' },
    {label: 'Productos', route: '/productos', icon: 'productos'},
    {label: 'Movimientos', route: '/movimientos', icon: 'movimientos'},
    {label: 'Marcas', route: '/marcasproveedores', icon: 'marcas' }
];
export declare type NavItems = (NavLink | NavGroup)[];

export interface NavLinkProps {
  to?: string;
  href?: string;
}

export interface NavLink extends NavLinkProps, Partial<AclProperties> {
  title: string;
  icon?: unknown;
  disable?: boolean;
}

export interface AclProperties {
  action: string;
  subject: string;
}

export interface NavGroup extends Partial<AclProperties> {
  title: string;
  icon?: unknown;
  children: (NavLink | NavGroup)[];
  disable?: boolean;
}

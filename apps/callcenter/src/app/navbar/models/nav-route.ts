export interface NavRoute {
  children?: NavRoute[];
  menuOpen?: boolean;
  name: string;
  relativeUrl?: string;
  roles?: string[] | string | undefined;
}

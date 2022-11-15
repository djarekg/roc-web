import { HttpFeature, HttpFeatureKind } from '@angular/common/http';
import { Provider } from '@angular/core';

export function makeHttpFeature<KindT extends HttpFeatureKind>(
  kind: KindT,
  providers: Provider[]
): HttpFeature<KindT> {
  return {
    ɵkind: kind,
    ɵproviders: providers,
  };
}

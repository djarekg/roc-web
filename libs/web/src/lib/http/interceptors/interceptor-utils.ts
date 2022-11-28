import { type HttpFeature, type HttpFeatureKind } from '@angular/common/http';
import { type Provider } from '@angular/core';

export function makeHttpFeature<KindT extends HttpFeatureKind>(
  kind: KindT,
  providers: Provider[]
): HttpFeature<KindT> {
  return {
    ɵkind: kind,
    ɵproviders: providers,
  };
}

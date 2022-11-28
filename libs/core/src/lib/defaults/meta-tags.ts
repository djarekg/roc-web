import { APP_INITIALIZER, type Provider } from '@angular/core';
import { Meta } from '@angular/platform-browser';

export const META_TAGS: Provider = {
  provide: APP_INITIALIZER,
  useFactory: (meta: Meta) => () => {
    meta.addTags([
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' },
    ]);
  },
  deps: [Meta],
};

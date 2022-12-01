import { APP_INITIALIZER, type Provider } from '@angular/core';
import { Meta } from '@angular/platform-browser';

export const META_TAGS: Provider = {
  deps: [Meta],
  provide: APP_INITIALIZER,
  useFactory: (meta: Meta) => () => {
    meta.addTags([
      { content: '#da532c', name: 'msapplication-TileColor' },
      { content: '#ffffff', name: 'theme-color' },
    ]);
  },
};

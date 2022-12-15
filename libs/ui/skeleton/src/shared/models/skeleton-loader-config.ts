import { InjectionToken } from '@angular/core';

import {
  type SkeletonAnimation,
  type SkeletonAppearance,
  type SkeletonLoaderConfigTheme,
} from '../types';

export interface SkeletonLoaderConfig {
  animation: SkeletonAnimation;
  appearance: SkeletonAppearance;
  ariaLabel: string;
  count: number;
  loadingText: string;
  theme: SkeletonLoaderConfigTheme;
}

export const SKELETON_LOADER_CONFIG = new InjectionToken<SkeletonLoaderConfig>(
  'skeleton-loader-config',
);

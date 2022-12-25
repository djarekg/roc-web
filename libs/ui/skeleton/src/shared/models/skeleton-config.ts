import { InjectionToken } from '@angular/core';

import {
  type SkeletonAnimation,
  type SkeletonAppearance,
  type SkeletonConfigTheme,
} from '../types';

export interface SkeletonConfig {
  animation: SkeletonAnimation;
  appearance: SkeletonAppearance;
  ariaLabel: string;
  count: number;
  loadingText: string;
  theme: SkeletonConfigTheme;
}

export const SKELETON_CONFIG = new InjectionToken<SkeletonConfig>(
  'skeleton-config',
);

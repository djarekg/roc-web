import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  type OnChanges,
  type OnInit,
  type SimpleChanges,
  inject,
  isDevMode,
} from '@angular/core';

import { SKELETON_LOADER_CONFIG } from '../../shared/models';
import {
  SKELETON_ANIMATION,
  SKELETON_APPEARANCE,
  type SkeletonAnimation,
  type SkeletonAppearance,
  type SkeletonLoaderConfigTheme,
} from '../../shared/types';

@Component({
  selector: 'rw-skeleton-loader',
  standalone: true,
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, NgFor, NgIf, NgStyle],
})
export class SkeletonLoaderComponent implements OnInit, OnChanges {
  static ngAcceptInputType_count: number | string;
  static ngAcceptInputType_animation: boolean | string;

  readonly #config = inject(SKELETON_LOADER_CONFIG, { optional: true });

  protected items: unknown[];
  protected widthStyle: { [k: string]: any } | undefined;

  @Input() animation: SkeletonAnimation;
  @Input() appearance: SkeletonAppearance;
  @Input() ariaLabel: string;
  @Input() count: number;
  @Input() loadingText: string;
  @Input() theme: SkeletonLoaderConfigTheme;

  @Input()
  set width(value: string | null) {
    if (value) {
      this.widthStyle = { width: value };
    }
  }

  constructor() {
    const {
      appearance = 'line',
      animation = 'progress-dark',
      theme = null,
      loadingText = 'Loading...',
      count = 1,
      ariaLabel = 'loading',
    } = this.#config ?? {};

    this.animation = animation;
    this.appearance = appearance;
    this.ariaLabel = ariaLabel;
    this.count = count;
    this.items = [];
    this.loadingText = loadingText;
    this.theme = theme;
  }

  ngOnInit() {
    this.validateInputValues();
  }

  private validateInputValues() {
    // Checking if it's receiving a numeric value (string having ONLY numbers or if it's a number)
    if (!/^\d+$/.test(`${this.count}`)) {
      // Shows error message only in Development
      if (isDevMode()) {
        console.error(
          `\`SkeletonLoaderComponent\` need to receive 'count' a numeric value. Forcing default to "1".`,
        );
      }
      this.count = 1;
    }

    //Force count to 1 when custom-content is used
    if (this.appearance === 'custom-content') {
      // Shows error message only in Development
      if (isDevMode() && this.count !== 1) {
        console.error(
          `\`SkeletonLoaderComponent\` enforces elements with "custom-content" appearance as DOM nodes. Forcing "count" to "1".`,
        );
        this.count = 1;
      }
    }
    this.items.length = this.count;

    if (!SKELETON_ANIMATION.includes(this.animation)) {
      // Shows error message only in Development
      if (isDevMode()) {
        console.error(
          `\`SkeletonLoaderComponent\` need to receive 'animation' as: ${SKELETON_ANIMATION.join(
            ', ',
          )}. Forcing default to "progress".`,
        );
      }
      this.animation = 'progress';
    }

    if (!SKELETON_APPEARANCE.includes(this.appearance)) {
      // Shows error message only in Development
      if (isDevMode()) {
        console.error(
          `\`SkeletonLoaderComponent\` need to receive 'appearance' as: circle or line or custom-content or empty string. Forcing default to "''".`,
        );
      }

      this.appearance = '';
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // Avoiding multiple calls for the same input in case there's no changes in the fields
    // Checking if the fields that require validation are available and if they were changed
    // In case were not changed, we stop the function. Otherwise, `validateInputValues` will be called.
    if (
      ['count', 'animation', 'appearance'].find(
        key =>
          changes[key] &&
          (changes[key].isFirstChange() ||
            changes[key].previousValue === changes[key].currentValue),
      )
    ) {
      return;
    }

    this.validateInputValues();
  }
}

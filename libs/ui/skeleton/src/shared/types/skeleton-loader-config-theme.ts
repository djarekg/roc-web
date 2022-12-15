export type SkeletonLoaderConfigTheme = {
  // This is required since ngStyle is using `any` as well
  // More details in https://angular.io/api/common/NgStyle
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [k: string]: any;
} | null;

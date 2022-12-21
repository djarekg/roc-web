import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'random',
  standalone: true,
})
export class RandomPipe implements PipeTransform {
  transform(input: any, min: number = 0, max: number = 1): any {
    if (!isNumberFinite(min) || !isNumberFinite(max)) {
      return input;
    }

    if (min > max) {
      max = min;
      min = 0;
    }

    return Math.random() * (max - min) + min;
  }
}

export function isNumberFinite(value: any): value is number {
  return typeof value === 'number' && isFinite(value);
}

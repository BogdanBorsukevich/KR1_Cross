import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameGeneratorService {
  private prefixes = ['cool', 'mega', 'the', 'super'];
  private suffixes = ['_123', '_dev', '_xD', '_pro'];

  generateUsername(base: string): string {
    const prefix = this.getRandom(this.prefixes);
    const suffix = this.getRandom(this.suffixes);
    return `${prefix}${base}${suffix}`;
  }

  private getRandom(arr: string[]): string {
    return arr[Math.floor(Math.random() * arr.length)];
  }
}

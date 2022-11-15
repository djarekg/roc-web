export class InMemoryStorage implements Storage {
  readonly #storage = new Map<string, string>();

  get length(): number {
    return this.#storage.size;
  }

  clear(): void {
    this.#storage.clear();
  }

  getItem(key: string): string | null {
    return this.#storage.get(String(key)) ?? null;
  }

  key(index: number): string | null {
    return [...this.#storage.keys()][Number(index)] ?? null;
  }

  setItem(key: string, value: string): void {
    this.#storage.set(String(key), String(value));
  }

  removeItem(key: string): void {
    this.#storage.delete(String(key));
  }
}

export abstract class StorageBase {
  protected abstract storage: Storage | null;

  clear(): void {
    this.storage?.clear();
  }

  get<T = string>(key: string): T | null {
    const item = this.storage?.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  }

  remove(key: string): void {
    this.storage?.removeItem(key);
  }

  set(key: string, value: unknown): void {
    this.storage?.setItem(key, JSON.stringify(value));
  }
}

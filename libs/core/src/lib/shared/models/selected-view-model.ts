export interface SelectedViewModel<T> {
  entity: Readonly<T> | null;
  loading: boolean;
}

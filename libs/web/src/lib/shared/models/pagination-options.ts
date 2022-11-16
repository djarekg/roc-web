export abstract class PaginationOptions {
  constructor(
    public pageIndex: number,
    public pageSize: number,
    public filter: string,
    public sortColumn: string,
    public isSortDescending: boolean
  ) {}
}

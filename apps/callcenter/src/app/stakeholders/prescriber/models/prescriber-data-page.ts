import { PaginationOptions } from '@roc-web/web';

export class PrescriberDataPage extends PaginationOptions {
  constructor(
    public override pageIndex: number,
    public override pageSize: number,
    public override filter: string,
    public override sortColumn: string,
    public override isSortDescending: boolean,
    public stakeholderId: string,
    public lastName: string,
    public nationalId: string
  ) {
    super(pageIndex, pageSize, filter, sortColumn, isSortDescending);
  }
}

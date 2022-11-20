import { PaginationOptions } from '@roc-web/web';

export interface PrescriberPaginationOptions extends PaginationOptions {
  lastName: string | null;
  nationalId: string | null;
  stakeholderId: string | null;
}

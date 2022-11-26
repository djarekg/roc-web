import { canActivate as prescriberExistsCanActivate } from './prescriber-exists.guard';
import { canActivate as prescribersGuardCanActivate } from './prescribers.guard';

export const prescriberExitsGuards = {
  canActive: prescriberExistsCanActivate,
};

export const prescribersGuard = {
  canActivate: prescribersGuardCanActivate,
};

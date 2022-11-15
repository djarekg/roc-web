export interface TwoFactorDetail {
  authenticatorKey: string;
  hasAuthenticator: boolean;
  twoFactorAuthenticationEnabled: boolean;
  recoveryCodes: string[];
  recoveryCodesLeft: number;
}

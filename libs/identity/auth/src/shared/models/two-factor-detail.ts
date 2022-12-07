export interface TwoFactorDetail {
  authenticatorKey: string;
  hasAuthenticator: boolean;
  recoveryCodes: string[];
  recoveryCodesLeft: number;
  twoFactorAuthenticationEnabled: boolean;
}

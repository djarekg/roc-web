// export const enum Endpoints {
//   prescribers = 'api/prescribers',
// }

export const Endpoints = {
  prescribers: 'api/prescribers',
  prescriberDelegates: 'api/prescriber-delegate',
} as const;

export type Endpoints = typeof Endpoints[keyof typeof Endpoints];

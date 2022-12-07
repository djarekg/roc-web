export enum StatusType {
  unknown = -1,
  pending = 1,
  registered = 2,
  preRegistered = 3,
  inactive = 4,
  incomplete = 5,
  labTestIncomplete = 6,
  labTestComplete = 7,
  labTestOrdered = 8,
  labTestSampleShipped = 9,
  labTestSampleReceived = 10,
  labTestResultReceived = 11,
  labTestCancelled = 12,
}
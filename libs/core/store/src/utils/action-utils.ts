export function parseActionEvent(actionType: string): string {
  return /\]\s(.*)/.exec(actionType)?.[1] ?? 'Unknown error';
}

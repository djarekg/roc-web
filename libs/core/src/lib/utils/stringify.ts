export function stringify(token: any): string {
  if (typeof token === 'string') {
    return token;
  }

  if (Array.isArray(token)) {
    return '[' + token.map(stringify).join(', ') + ']';
  }

  if (token == null) {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    return '' + token;
  }

  if (token.overriddenName) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return `${token.overriddenName}`;
  }

  if (token.name) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return `${token.name}`;
  }

  if (!token.toString) {
    return 'object';
  }

  // WARNING: do not try to `JSON.stringify(token)` here
  // see https://github.com/angular/angular/issues/23440
  const res = token.toString();

  if (res == null) {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    return '' + res;
  }

  const newLineIndex = res.indexOf('\n');
  return newLineIndex === -1 ? res : res.substring(0, newLineIndex);
}

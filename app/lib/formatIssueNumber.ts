const ISSUE_PAD_LENGTH = 2;

/**
 * @example
 * formatIssueNumber(1) // "#01"
 */
export function formatIssueNumber(value: number): string {
  return `#${String(value).padStart(ISSUE_PAD_LENGTH, "0")}`;
}

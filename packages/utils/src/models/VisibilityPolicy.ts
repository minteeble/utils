/**
 * Enumeration model for specifying access behaviour to a resource
 */
export enum VisibilityPolicy {
  /**
   * Access denied.
   */
  None,

  /**
   * Only read operation is permitted.
   */
  ReadOnly,

  /**
   * Both read and write operations are permitted.
   */
  ReadWrite,
}

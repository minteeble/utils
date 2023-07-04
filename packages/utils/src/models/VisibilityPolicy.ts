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

/**
 * Utils methods for validating visibility policies
 */
export class VisibilityPolicyUtils {
  /**
   * Checks that provided policy has at least read permissions
   *
   * @param policy Visibility policy to be validated
   * @returns
   */
  public static hasAtLeastReadPermission(policy: VisibilityPolicy) {
    return (
      policy === VisibilityPolicy.ReadOnly ||
      policy === VisibilityPolicy.ReadWrite
    );
  }

  public static hasReadWritePermission(policy: VisibilityPolicy) {
    return policy === VisibilityPolicy.ReadWrite;
  }
}

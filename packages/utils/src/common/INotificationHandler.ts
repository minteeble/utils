/**
 * Interface for handling generic notification handlers inside minteeble ecosystem.
 */
export interface INotificationHandler {
  /**
   * Handles an error message
   *
   * @param message Error message text to be displayed/logged
   */
  error(message: string): void;

  /**
   * Handles a warning message
   *
   * @param message Warning message text to be displayed/logged
   */
  warning(message: string): void;

  /**
   * Handles an informational message
   *
   * @param message Info message text to be displayed/logged
   */
  info(message: string): void;

  /**
   * Handles a success message
   *
   * @param message Success message text to be displayed/logged
   */
  success(message: string): void;
}

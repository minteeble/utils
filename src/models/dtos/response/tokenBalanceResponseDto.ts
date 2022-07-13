/**
 * DTO response model for handlind Token balance
 */
export interface TokenBalanceResponseDto {
  /**
   * Token balance value
   */
  Balance: number;

  /**
   * Tokens earned every day
   */
  TokensPerDay: number;
}

export interface TraitValueStats {
  /**
   * The name of the trait value.
   */
  valueName: string;

  /**
   * The number of NFTs with this trait value.
   */
  count: number;
}

export interface TraitTypeStats {
  /**
   * The name of the trait type.
   */
  name: string;

  /**
   * The variants with this trait type.
   */
  values: Array<TraitValueStats>;
}

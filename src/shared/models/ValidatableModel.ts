import { IBaseModel } from "./BaseModel";

/**
 * Model that can be validated
 */
export interface IValidatableModel extends IBaseModel {
  /**
   * Checks if model is valid or not
   */
  isValid(): boolean;
}

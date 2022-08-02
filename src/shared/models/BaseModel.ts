import { JsonObject } from "typescript-json-serializer";

/**
 * Interface for Base Mobel
 */
export interface IBaseModel {}

/**
 * Base model class
 */
@JsonObject()
export class BaseModel implements IBaseModel {
  constructor() {}
}

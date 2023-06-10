import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../models";

/**
 * Formal parameter held by a Predicate
 */
@JsonObject()
export class PredicateParameter {
  /**
   * Parameter's name
   */
  @JsonProperty()
  parameterName: string;
}

/**
 * Actual parameters to be mapped to Predicate's formal parameters
 */
@JsonObject()
export class PredicateParameterValue {
  /**
   * Parameter's name
   */
  @JsonProperty()
  parameterName: string;

  /**
   * Parameter's value
   */
  @JsonProperty()
  value: any;
}

export interface IPredicateClientModel extends IBaseModel {
  id: string;
  code: string;
  name: string;
  parameters: Array<PredicateParameter>;
  resourceOwner: string;
}

@JsonObject()
export class PredicateClientModel
  extends BaseModel
  implements IPredicateClientModel
{
  @JsonProperty()
  id: string;

  @JsonProperty()
  code: string;

  @JsonProperty()
  name: string;

  @JsonProperty()
  parameters: PredicateParameter[];

  @JsonProperty()
  resourceOwner: string;
}

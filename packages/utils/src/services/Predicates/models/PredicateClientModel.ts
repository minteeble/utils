import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../models";

@JsonObject()
export class PredicateParameter {
  @JsonProperty()
  parameterName: string;
}

@JsonObject()
export class PredicateParameterValue {
  @JsonProperty()
  parameterName: string;

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

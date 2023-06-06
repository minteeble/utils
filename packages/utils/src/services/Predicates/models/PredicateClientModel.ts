import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../models";

export class inputParameter {
  parameterName: string;
}

export interface IPredicateClientModel extends IBaseModel {
  id: string;
  code: string;
  name: string;
  inputParameters: Array<inputParameter>;
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
  inputParameters: inputParameter[];

  @JsonProperty()
  resourceOwner: string;
}

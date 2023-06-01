import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../models";

export class inputParameter {
  parameterName: string;
}

export interface IPredicateClientModel extends IBaseModel {
  code: string;
  inputParameters: Array<inputParameter>;
  id: string;
}

@JsonObject()
export class PredicateClientModel
  extends BaseModel
  implements IPredicateClientModel
{
  @JsonProperty()
  code: string;

  @JsonProperty()
  inputParameters: inputParameter[];

  @JsonProperty()
  id: string;
}

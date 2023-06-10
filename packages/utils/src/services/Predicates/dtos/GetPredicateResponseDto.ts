import { IBaseModel, BaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { PredicateParameter } from "../models";

export interface IGetPredicateResponseDto extends IBaseModel {
  code: string;
  parameters: Array<PredicateParameter>;
  name: string;
  resourceOwner: string;
  id: string;
}

@JsonObject()
export class GetPredicateResponseDto
  extends BaseModel
  implements IGetPredicateResponseDto
{
  @JsonProperty()
  code: string;

  @JsonProperty()
  parameters: PredicateParameter[];

  @JsonProperty()
  name: string;

  @JsonProperty()
  resourceOwner: string;

  @JsonProperty()
  id: string;
}

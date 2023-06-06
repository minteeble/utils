import { IBaseModel, BaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { inputParameter } from "../models";

export interface IGetPredicateResponseDto extends IBaseModel {
  code: string;
  inputParameters: Array<inputParameter>;
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
  inputParameters: inputParameter[];

  @JsonProperty()
  name: string;

  @JsonProperty()
  resourceOwner: string;

  @JsonProperty()
  id: string;
}

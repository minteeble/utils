import { IBaseModel, BaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";

export interface IGetFormResponseDto extends IBaseModel {
  id: string;
  formName: string;
  createdAt: string;
  resourceOwner: string;
}

@JsonObject()
export class GetFormResponseDto
  extends BaseModel
  implements IGetFormResponseDto
{
  @JsonProperty()
  id: string;

  @JsonProperty()
  formName: string;

  @JsonProperty()
  createdAt: string;

  @JsonProperty()
  resourceOwner: string;
}

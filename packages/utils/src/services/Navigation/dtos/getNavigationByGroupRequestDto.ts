import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../models";

export interface IGetNavigationByGroupRequestDto extends IBaseModel {
  groupName: string;
}

@JsonObject()
export class GetNavigationByGroupRequestDto
  extends BaseModel
  implements IGetNavigationByGroupRequestDto
{
  @JsonProperty()
  groupName: string;

  constructor() {
    super();
  }
}

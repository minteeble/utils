import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../../shared";

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

import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../shared/models/BaseModel";

export interface IGetUserAccessInfoRequestDto extends IBaseModel {
  urlName: string;
}

@JsonObject()
export class GetUserAccessInfoRequestDto
  extends BaseModel
  implements IGetUserAccessInfoRequestDto
{
  @JsonProperty({ required: true })
  urlName: string;

  constructor() {
    super();
  }
}

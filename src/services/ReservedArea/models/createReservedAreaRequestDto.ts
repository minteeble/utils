import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../shared/models/BaseModel";

export interface ICreateReservedAreaRequestDto extends IBaseModel {
  urlName: string;

  fullName: string;

  owner: string;
}

@JsonObject()
export class CreateReservedAreaRequestDto
  extends BaseModel
  implements ICreateReservedAreaRequestDto
{
  @JsonProperty({ required: false })
  urlName: string;

  @JsonProperty({ required: false })
  fullName: string;

  @JsonProperty({ required: false })
  owner: string;

  constructor() {
    super();
  }
}

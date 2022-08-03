import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../shared/models/BaseModel";

export interface ICreateReservedAreaRequestDto extends IBaseModel {
  urlName: string;

  fullName: string;

  owner: string;

  contractAddress: string;

  chain: string;

  type: string;
}

@JsonObject()
export class CreateReservedAreaRequestDto
  extends BaseModel
  implements ICreateReservedAreaRequestDto
{
  @JsonProperty({ required: true })
  urlName: string;

  @JsonProperty({ required: true })
  fullName: string;

  @JsonProperty({ required: false })
  owner: string;

  @JsonProperty({ required: true })
  contractAddress: string;

  @JsonProperty({ required: true })
  chain: string;

  @JsonProperty({ required: true })
  type: string;

  constructor() {
    super();
  }
}

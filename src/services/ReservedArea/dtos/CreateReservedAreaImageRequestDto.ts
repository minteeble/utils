import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../shared";
import { ImageType } from "../models/ImageType";

export interface ICreateReservedAreaImageRequestDto extends IBaseModel {
  urlName: string;

  type: ImageType;
}

@JsonObject()
export class CreateReservedAreaImageRequestDto
  extends RequestDto
  implements ICreateReservedAreaImageRequestDto
{
  @JsonProperty()
  urlName: string;

  @JsonProperty()
  type: ImageType;
}

import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, RequestDto } from "../../../models";

export interface IGetAppRequestDto extends IBaseModel {
  urlName: string;
}

@JsonObject()
export class GetAppRequestDto extends RequestDto implements IGetAppRequestDto {
  @JsonProperty()
  urlName: string;
}

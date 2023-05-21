import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel, RequestDto } from "../../../models";

export interface ISetCustomABIRequestDto extends IBaseModel {
  chainName: string;

  collectionId: string;

  ABI: any;
}

@JsonObject()
export class SetCustomABIRequestDto
  extends RequestDto
  implements ISetCustomABIRequestDto
{
  @JsonProperty()
  chainName: string;

  @JsonProperty()
  collectionId: string;

  @JsonProperty()
  ABI: any;
}

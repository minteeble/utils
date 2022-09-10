import { JsonObject, JsonProperty } from "typescript-json-serializer";
import {
  BaseModel,
  IBaseModel,
  ISingleOwnableClientModel,
  SingleOwnableClientModel,
} from "../../../../shared";

export interface IGetNftCollectionInfoRequestDto extends IBaseModel {
  chainName: string;

  address: string;

  user: string;
}

@JsonObject()
export class GetNftCollectionInfoRequestDto
  extends BaseModel
  implements IGetNftCollectionInfoRequestDto
{
  @JsonProperty()
  chainName: string;

  @JsonProperty()
  address: string;

  @JsonProperty()
  user: string;
}

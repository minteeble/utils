import { JsonObject, JsonProperty } from "typescript-json-serializer";
import {
  BaseModel,
  IBaseModel,
  ISingleOwnableClientModel,
  SingleOwnableClientModel,
} from "../../../../shared";

export interface IGetNftCollectionInfoRequestDto
  extends ISingleOwnableClientModel {
  chainName: string;

  address: string;
}

@JsonObject()
export class GetNftCollectionInfoRequestDto
  extends SingleOwnableClientModel
  implements IGetNftCollectionInfoRequestDto
{
  @JsonProperty()
  chainName: string;

  @JsonProperty()
  address: string;
}

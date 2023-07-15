import { IBaseModel, BaseModel } from "../../../models";
import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { RedeemType } from "./RedeemSystemInfoClientModel";

export interface IRedeemSystemInfoPreviewClientModel extends IBaseModel {
  name: string;
  id: string;
  type: RedeemType;
  collectionId: string;
  resourceOwner: string;
}

@JsonObject()
export class RedeemSystemInfoPreviewClientModel
  extends BaseModel
  implements IRedeemSystemInfoPreviewClientModel
{
  @JsonProperty()
  name: string;

  @JsonProperty()
  id: string;

  @JsonProperty()
  type: RedeemType;

  @JsonProperty()
  collectionId: string;

  @JsonProperty()
  resourceOwner: string;
}

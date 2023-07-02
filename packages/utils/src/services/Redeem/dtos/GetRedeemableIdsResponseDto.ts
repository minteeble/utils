import { JsonProperty } from "typescript-json-serializer";
import { JsonObject } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../models";

export interface IGetRedeemableIdsResponseDto extends IBaseModel {
  ids: Array<number>;
}

@JsonObject()
export class GetRedeemableIdsResponseDto
  extends BaseModel
  implements IGetRedeemableIdsResponseDto
{
  @JsonProperty()
  ids: Array<number>;

  constructor() {
    super();
    this.ids = [];
  }
}

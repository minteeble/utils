import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../../shared";
import { GadgetGroupClientModel, IGadgetGroupClientModel } from "../models";

export interface IGetGadgetsByOwnerResponseDto extends IBaseModel {
  items: Array<IGadgetGroupClientModel>;
}

@JsonObject()
export class GetGadgetsByOwnerResponseDto
  extends BaseModel
  implements IGetGadgetsByOwnerResponseDto
{
  @JsonProperty({ type: GadgetGroupClientModel })
  items: Array<GadgetGroupClientModel>;
}

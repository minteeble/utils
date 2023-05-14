import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../../shared";
import { GadgetGroupClientModel, IGadgetGroupClientModel } from "../models";

export interface IGetGadgetGroupsByOwnerResponseDto extends IBaseModel {
  items: Array<IGadgetGroupClientModel>;
}

@JsonObject()
export class GetGadgetGroupsByOwnerResponseDto
  extends BaseModel
  implements IGetGadgetGroupsByOwnerResponseDto
{
  @JsonProperty({ type: GadgetGroupClientModel })
  items: Array<GadgetGroupClientModel>;
}

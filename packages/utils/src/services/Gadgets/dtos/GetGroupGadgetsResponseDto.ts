import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../models";
import { IGadgetInfoClientModel, GadgetInfoClientModel } from "../models";

export interface IGetGroupGadgetsResponseDto extends IBaseModel {
  items: Array<IGadgetInfoClientModel>;
}

@JsonObject()
export class GetGroupGadgetsResponseDto
  extends BaseModel
  implements IGetGroupGadgetsResponseDto
{
  @JsonProperty({ type: GadgetInfoClientModel })
  items: Array<GadgetInfoClientModel>;
}

import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../models";
import { GadgetGroupClientModel, IGadgetGroupClientModel } from "../models";

export interface IGetGadgetGroupResponseDto extends IGadgetGroupClientModel {}

@JsonObject()
export class GetGadgetGroupResponseDto
  extends GadgetGroupClientModel
  implements IGetGadgetGroupResponseDto {}

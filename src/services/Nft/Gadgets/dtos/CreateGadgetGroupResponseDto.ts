import { JsonObject } from "typescript-json-serializer";
import { IBaseModel } from "../../../../shared";
import { GadgetGroupClientModel, IGadgetGroupClientModel } from "../models";

export interface ICreateGadgetGroupResponseDto
  extends IGadgetGroupClientModel {}

@JsonObject()
export class CreateGadgetGroupResponseDto
  extends GadgetGroupClientModel
  implements ICreateGadgetGroupResponseDto {}

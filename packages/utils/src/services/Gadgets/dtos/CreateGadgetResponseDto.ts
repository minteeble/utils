import { JsonObject } from "typescript-json-serializer";
import { GadgetInfoClientModel, IGadgetInfoClientModel } from "../models";

export interface ICreateGadgetResponseDto extends IGadgetInfoClientModel {}

@JsonObject()
export class CreateGadgetResponseDto
  extends GadgetInfoClientModel
  implements ICreateGadgetResponseDto {}

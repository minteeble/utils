import { JsonObject } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../models";

export interface ICreateRendererResponseDto extends IBaseModel {}

@JsonObject()
export class CreateRendererResponseDto
  extends BaseModel
  implements ICreateRendererResponseDto {}

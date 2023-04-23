import { JsonObject } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../../shared";

export interface IRendererDataClientModel extends IBaseModel {}

@JsonObject()
export class RendererDataClientModel
  extends BaseModel
  implements IRendererDataClientModel {}

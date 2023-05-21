import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../models";

export interface IERC20OwnershipClientModel extends IBaseModel {}

@JsonObject()
export class ERC20OwnershipClientModel
  extends BaseModel
  implements IERC20OwnershipClientModel {}

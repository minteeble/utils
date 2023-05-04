import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../shared";

export interface IERC1155OwnershipClientModel extends IBaseModel {}

@JsonObject()
export class ERC1155OwnershipClientModel
  extends BaseModel
  implements IERC1155OwnershipClientModel {}

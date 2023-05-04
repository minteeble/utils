import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../shared";

export interface IERC721OwnershipClientModel extends IBaseModel {}

@JsonObject()
export class ERC721OwnershipClientModel
  extends BaseModel
  implements IERC721OwnershipClientModel {}

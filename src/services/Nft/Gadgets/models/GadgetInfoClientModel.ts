import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../../shared";

/**
 * GadgetInfo Client Model
 */
export interface IGadgetInfoClientModel extends IBaseModel {
  /**
   * Gadget group's id
   */
  groupId: string;

  /**
   * Name of gadget's trait
   */
  traitName: string;

  /**
   * Gadget's value
   */
  value: string;

  /**
   * Gadget's token ID inside the group
   */
  tokenId: number;
}

@JsonObject()
export class GadgetInfoClientModel
  extends BaseModel
  implements IGadgetInfoClientModel
{
  @JsonProperty()
  groupId: string;

  @JsonProperty()
  traitName: string;

  @JsonProperty()
  value: string;

  @JsonProperty()
  tokenId: number;
}

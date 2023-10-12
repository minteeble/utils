import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../models";

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

  /**
   * Whether the gadget has an image (optional)
   */
  hasImage?: boolean;

  /**
   * Gadget's image URL (optional)
   */
  imageUrl?: string;
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

  @JsonProperty({ required: false })
  hasImage?: boolean;

  @JsonProperty({ required: false })
  imageUrl?: string;
}

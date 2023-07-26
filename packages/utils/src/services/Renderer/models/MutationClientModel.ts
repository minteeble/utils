import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../models";

export enum MutationType {
  DEFAULT = "default",
  SERVER_TRACKED = "server_tracked",
}

export interface MutationVariant extends IBaseModel {
  name: string;
  renderers: string[];
}

export interface IMutationClientModel extends IBaseModel {
  type: MutationType;
  variants: MutationVariant[];
}

@JsonObject()
export class MutationClientModel
  extends BaseModel
  implements IMutationClientModel
{
  @JsonProperty()
  type: MutationType;
  @JsonProperty()
  variants: MutationVariant[];
}

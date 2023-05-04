import { JsonObject, JsonProperty } from "typescript-json-serializer";
import {
  IRequirementItemClientModel,
  RequirementItemClientModel,
} from "./RequirementItemClientModel";

export interface ITokenOwnershipClientModel
  extends IRequirementItemClientModel {
  chainName: string;

  address: string;

  amount: string;
}

@JsonObject()
export class TokenOwnershipClientModel
  extends RequirementItemClientModel
  implements ITokenOwnershipClientModel
{
  @JsonProperty()
  chainName: string;

  @JsonProperty()
  address: string;

  @JsonProperty()
  amount: string;
}

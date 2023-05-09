import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../shared";
import { ReservedAreaClientModel } from "../../ReservedArea/models";

/**
 * User Info
 */
export interface IUserInfoClientModel extends IBaseModel {
  userName: string;

  /**
   * Reserved areas in which the user is
   */
  areas: Array<ReservedAreaClientModel>;
}

@JsonObject()
export class UserInfoClientModel
  extends BaseModel
  implements IUserInfoClientModel
{
  @JsonProperty()
  userName: string;

  @JsonProperty()
  areas: ReservedAreaClientModel[];
}

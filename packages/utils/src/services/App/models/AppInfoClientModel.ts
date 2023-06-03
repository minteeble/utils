import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { BaseModel, IBaseModel } from "../../../models";

export interface IAppInfoClientModel extends IBaseModel {
  urlName: string;
  displayName: string;
}

@JsonObject()
export class AppInfoClientModel
  extends BaseModel
  implements IAppInfoClientModel
{
  @JsonProperty()
  urlName: string;

  @JsonProperty()
  displayName: string;
}

import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { IBaseModel, BaseModel } from "../../../models";
import { AppInfoClientModel, IAppInfoClientModel } from "../models";

export interface IGetUserAppsResponseDto extends IBaseModel {
  apps: Array<IAppInfoClientModel>;
}

@JsonObject()
export class GetUserAppsResponseDto
  extends BaseModel
  implements IGetUserAppsResponseDto
{
  apps: AppInfoClientModel[];
}

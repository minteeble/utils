import { JsonObject } from "typescript-json-serializer";
import { AppInfoClientModel, IAppInfoClientModel } from "../models";

export interface ICreateAppResponseDto extends IAppInfoClientModel {}

@JsonObject()
export class CreateAppResponseDto
  extends AppInfoClientModel
  implements ICreateAppResponseDto {}

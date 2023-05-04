import { JsonObject } from "typescript-json-serializer";
import { AppInfoClientModel, IAppInfoClientModel } from "../models";

export interface IGetAppResponseDto extends IAppInfoClientModel {}

@JsonObject()
export class GetAppResponseDto
  extends AppInfoClientModel
  implements IGetAppResponseDto {}

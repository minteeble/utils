import { IBaseModel, RequestDto } from "../../../models";
import { JsonObject } from "typescript-json-serializer";

export interface IGetRedeemSystemsInfoRequestDto extends IBaseModel {}

@JsonObject()
export class GetRedeemSystemsInfoRequestDto
  extends RequestDto
  implements IGetRedeemSystemsInfoRequestDto {}

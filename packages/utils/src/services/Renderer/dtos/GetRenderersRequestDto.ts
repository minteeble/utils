import { IBaseModel, RequestDto } from "../../../models";

export interface IGetRenderersRequestDto extends IBaseModel {}

export class GetRenderersRequestDto
  extends RequestDto
  implements IGetRenderersRequestDto {}

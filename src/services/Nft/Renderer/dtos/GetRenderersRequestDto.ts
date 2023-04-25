import { IBaseModel, RequestDto } from "../../../../shared";

export interface IGetRenderersRequestDto extends IBaseModel {}

export class GetRenderersRequestDto
  extends RequestDto
  implements IGetRenderersRequestDto {}

import { IBaseModel, RequestDto } from "../../../../shared";

export interface IGetGenerationsRequestDto extends IBaseModel {}

export class GetGenerationsRequestDto
  extends RequestDto
  implements IGetGenerationsRequestDto {}

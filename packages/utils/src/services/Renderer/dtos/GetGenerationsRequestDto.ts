import { IBaseModel, RequestDto } from "../../../models";

export interface IGetGenerationsRequestDto extends IBaseModel {}

export class GetGenerationsRequestDto
  extends RequestDto
  implements IGetGenerationsRequestDto {}

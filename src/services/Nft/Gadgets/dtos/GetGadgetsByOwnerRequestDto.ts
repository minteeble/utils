import { IBaseModel, RequestDto } from "../../../../shared";

export interface IGetGadgetsByOwnerRequestDto extends IBaseModel {}

export class GetGadgetsByOwnerRequestDto
  extends RequestDto
  implements IGetGadgetsByOwnerRequestDto {}

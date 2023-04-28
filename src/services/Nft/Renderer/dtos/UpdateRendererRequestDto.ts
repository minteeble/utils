import { IBaseModel, RequestDto } from "../../../../shared";

export interface IUpdateRendererRequestDto extends IBaseModel {
  rendererId: string;

  attributes: { [key: string]: string };
}

export class UpdateRendererRequestDto
  extends RequestDto
  implements IUpdateRendererRequestDto
{
  rendererId: string;

  attributes: { [key: string]: string };
}

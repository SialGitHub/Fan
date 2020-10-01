import { IsNotEmpty} from "class-validator";

export class CreatePostDto{

  @IsNotEmpty()
  readonly id: number

  @IsNotEmpty()
  readonly author: string

  @IsNotEmpty()
  readonly text: string
}
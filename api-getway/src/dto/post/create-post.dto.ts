import { IsNotEmpty, IsString, } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
class CreatePostDto {
  @ApiProperty({
    description: `title`,
    example: "",
  })
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @ApiProperty({
    description: `description`,
    example: "",
  })
  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @ApiProperty({
    description: `author`,
    example: "",
  })
  @IsNotEmpty()
  @IsString()
  readonly author: string;
}

export default CreatePostDto;
import { IsOptional, IsString, } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
class UpdatePostDto {
  @ApiProperty({
    description: `title`,
    example: "",
  })
  @IsOptional()
  @IsString()
  readonly title: string;

  @ApiProperty({
    description: `description`,
    example: "",
  })
  @IsOptional()
  @IsString()
  readonly description: string;

  @ApiProperty({
    description: `author`,
    example: "",
  })
  @IsOptional()
  @IsString()
  readonly author: string;
}

export default UpdatePostDto;
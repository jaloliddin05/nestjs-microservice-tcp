import { IsNotEmpty, IsString, } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
class CreateNotificationDto {
  @ApiProperty({
    description: `title`,
    example: "",
  })
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @ApiProperty({
    description: `status`,
    example: "",
  })
  @IsNotEmpty()
  @IsString()
  readonly status: string;
}

export default CreateNotificationDto;
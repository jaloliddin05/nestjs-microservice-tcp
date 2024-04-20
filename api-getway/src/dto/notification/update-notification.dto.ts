import { IsOptional, IsString, } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
class UpdateNotificationDto {
  @ApiProperty({
    description: `title`,
    example: "",
  })
  @IsOptional()
  @IsString()
  readonly title: string;

  @ApiProperty({
    description: `status`,
    example: "",
  })
  @IsOptional()
  @IsString()
  readonly status: string;
}

export default UpdateNotificationDto;
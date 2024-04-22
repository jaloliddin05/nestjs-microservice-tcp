import { IsNotEmpty, IsString, } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
class FollowUserDto {
  @ApiProperty({
    description: `user`,
    example: "",
  })
  @IsNotEmpty()
  @IsString()
  readonly user: string;

  @ApiProperty({
    description: `follow`,
    example: '',
  })
  @IsNotEmpty()
  @IsString()
  readonly follow: string;
}

export default FollowUserDto;
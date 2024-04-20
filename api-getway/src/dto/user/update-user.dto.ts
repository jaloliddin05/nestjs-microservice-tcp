import { IsNumber, IsOptional, IsString, } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
class UpdateUserDto {
  @ApiProperty({
    description: `username`,
    example: "",
  })
  @IsOptional()
  @IsString()
  readonly username: string;

  @ApiProperty({
    description: `password`,
    example: "",
  })
  @IsOptional()
  @IsString()
  readonly password: string;

  @ApiProperty({
    description: `name`,
    example: "John",
  })
  @IsOptional()
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: `birthday`,
    example: "",
  })
  @IsOptional()
  @IsString()
  readonly birthday: string;

  @ApiProperty({
    description: `role`,
    example: 1,
  })
  @IsOptional()
  @IsNumber()
  readonly role: number;
}

export default UpdateUserDto;
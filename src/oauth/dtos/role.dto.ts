import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateRoleDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  code: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}

export class UpdateRoleDto extends PartialType(CreateRoleDto) {}

export class ReadRoleDto extends PartialType(CreateRoleDto) {
  @IsNumber()
  @IsPositive()
  id: number;
}

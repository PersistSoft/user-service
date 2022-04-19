import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreatePermissionDto {
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

export class UpdatePermissionDto extends PartialType(CreatePermissionDto) {}

export class ReadPermissionDto extends PartialType(CreatePermissionDto) {
  @IsNumber()
  @IsPositive()
  id: number;
}

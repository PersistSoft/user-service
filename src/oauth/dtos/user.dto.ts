import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @Min(10)
  password: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}

export class ReadUserDto extends PartialType(CreateUserDto) {
  @IsNumber()
  @IsPositive()
  id: number;
}

import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateProfile {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly address: string;

  @IsString()
  @IsNotEmpty()
  readonly bloodGroup: string;

  @IsDateString()
  @IsNotEmpty()
  readonly dateOfBirth: Date;

  @IsString()
  @IsOptional()
  readonly facebook: string;
}

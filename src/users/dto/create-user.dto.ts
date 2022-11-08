import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  role: string;

  @ApiProperty()
  status: string;
}

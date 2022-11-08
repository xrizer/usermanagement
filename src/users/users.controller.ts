import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('v1/api')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('user-roles')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('user-roles')
  findAll() {
    return this.usersService.findAll();
  }

  // @Get('user-roles/:id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }

  @Put('user-roles/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete('user-roles/:id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}

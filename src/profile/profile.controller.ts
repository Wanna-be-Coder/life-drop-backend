import { CreateProfile } from './dto/create-profile';
import { ProfileService } from './profile.service';
import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}
  @Post()
  create(@Body() createProfileDATO: CreateProfile) {
    return this.profileService.createProfile(createProfileDATO);
  }
  @Get()
  findAll() {
    return this.profileService.findAll();
  }
  @Get(':id')
  findOne() {
    return 'Find one profile by Id';
  }
  @Put(':id')
  findOneandUpdate() {
    return 'Update one profile by Id';
  }
  @Delete(':id')
  findOneandDelete() {
    return 'Delete one profile by Id';
  }
}

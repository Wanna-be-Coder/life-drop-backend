import { Injectable } from '@nestjs/common';
import { CreateProfile } from './dto/create-profile';

@Injectable()
export class ProfileService {
  private readonly profiles: CreateProfile[] = [];
  createProfile(profile: CreateProfile) {
    this.profiles.push(profile);
    return this.profiles;
  }
  findAll() {
    return this.profiles;
  }
}

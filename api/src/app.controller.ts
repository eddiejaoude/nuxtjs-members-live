import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/members')
  getMembers() {
    return this.appService.getMembers();
  }

  @Post('/members')
  saveMember(@Body() member) {
    return this.appService.saveMember(member);
  }
}

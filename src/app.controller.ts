import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * ADVICE: the endpoint that not use params or atributs should appear in the first
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/info')
  getVersion(): object {
    return {
      api: 'user-service',
      version: '1.0.0',
    };
  }

  @Get('users/:userId')
  getUserById(
    @Param('userId', ParseIntPipe) userId: number,
    @Query('offset', ParseIntPipe) offset = 10,
    @Query('page', ParseIntPipe) page = 0,
    @Query('limit', ParseIntPipe) limit = 20,
  ): object {
    console.log(offset);
    return {
      userId: userId,
      name: 'Jose Luis Campos Bautista',
      email: 'camposb1990@gmail.com',
      roles: 'ADMIN',
    };
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user.controller';
import { RoleController } from './controllers/role.controller';
import { RoleService } from './services/role.service';
import { UserService } from './services/user.service';

@Module({
  imports: [],
  controllers: [AppController, UserController, RoleController],
  providers: [AppService, UserService, RoleService],
})
export class AppModule {}

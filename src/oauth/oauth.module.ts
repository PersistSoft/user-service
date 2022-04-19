import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { RoleController } from './controllers/role.controller';
import { PermissionController } from './controllers/permission.controller';
import { PermissionService } from './services/permission.service';
import { UserService } from './services/user.service';
import { RoleService } from './services/role.service';

@Module({
  controllers: [UserController, RoleController, PermissionController],
  providers: [PermissionService, UserService, RoleService],
})
export class OauthModule {}

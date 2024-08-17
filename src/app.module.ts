/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';  
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [EmployeeModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService,
    {  
      provide: APP_PIPE,  
      useClass: ValidationPipe,  
    },  
  ],
})
export class AppModule {}

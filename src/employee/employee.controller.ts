/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from '@prisma/client';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto'; 

@Controller('employees')  
export class EmployeeController {  
  constructor(private readonly employeeService: EmployeeService) {}  

  @Post()  
  create(@Body() createEmployeeDto: CreateEmployeeDto ): Promise<Employee> {  
    return this.employeeService.create(createEmployeeDto);  
  }  

  @Get()  
  findAll(): Promise<Employee[]> {  
    return this.employeeService.findAll();  
  }  

  @Get(':id')  
  findOne(@Param('id') id: string): Promise<Employee> {  
    return this.employeeService.findOne(+id);  
  }  

  @Put(':id')  
  update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<Employee> {
    return this.employeeService.update(+id, updateEmployeeDto);  
  }  

  @Delete(':id')  
  remove(@Param('id') id: string): Promise<Employee> {  
    return this.employeeService.remove(+id);  
  }  
}
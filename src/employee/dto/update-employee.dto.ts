/* eslint-disable prettier/prettier */
 
import { IsString, IsNotEmpty, IsDateString, IsEnum, IsOptional } from 'class-validator';  
import { Status } from './create-employee.dto'; // Mengimpor dari DTO Create yang telah di buat sebelumnya  

export class UpdateEmployeeDto {  
  @IsString()  
  @IsOptional()
  // @IsNotEmpty({ message: 'Name is required' })  
  name?: string;  

  @IsString()  
  @IsOptional()
  // @IsNotEmpty({ message: 'Number is required' })  
  number?: string;  

  @IsString()  
  @IsOptional()
  // @IsNotEmpty({ message: 'Position is required' })  
  position?: string;  

  @IsString()  
  @IsOptional()
  // @IsNotEmpty({ message: 'Department is required' })  
  department?: string;  

  @IsDateString()  
  @IsOptional()
  // @IsNotEmpty({ message: 'Date Joined is required' })  
  dateJoined?: string;  

  @IsEnum(Status)  
  @IsOptional()
  // @IsNotEmpty()  
  status?: Status;  
}
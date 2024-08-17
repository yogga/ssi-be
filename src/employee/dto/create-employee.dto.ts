/* eslint-disable prettier/prettier */
 import { IsString, IsNotEmpty, IsDateString, IsEnum } from 'class-validator';  

export enum Status {  
  KONTRAK = 'Kontrak',  
  TETAP = 'Tetap',  
  PROBATION = 'Probation',  
}  

export class CreateEmployeeDto {  
  @IsString()  
  @IsNotEmpty({ message: 'Name is required' })  
  name: string;  

  @IsString()  
  @IsNotEmpty()  
  number: string;   

  @IsString()  
  @IsNotEmpty({ message: 'Position is required' })  
  position: string;  

  @IsString()  
  @IsNotEmpty({ message: 'Department is required' })  
  department: string;  

  @IsDateString()  
  @IsNotEmpty({ message: 'Date Joined is required' })  
  dateJoined: string; // Format tanggal ISO  

  @IsEnum(Status)  
  @IsNotEmpty()  
  status: Status;  
}
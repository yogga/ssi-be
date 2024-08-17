/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Employee } from '@prisma/client';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateEmployeeDto): Promise<Employee> {
    // Cek apakah employeeNumber sudah ada
    const existingEmployee = await this.prisma.employee.findUnique({
      where: { number: data.number },
    });

    if (existingEmployee) {
      throw new Error('Employee number already exists');
    }
    
    return this.prisma.employee.create({ data });
  }

  async findAll(): Promise<Employee[]> {
    return this.prisma.employee.findMany();
  }

  async findOne(id: number): Promise<Employee> {
    return this.prisma.employee.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateEmployeeDto): Promise<Employee> {
    // Ambil employee yang akan diupdate
    const existingEmployee = await this.prisma.employee.findUnique({
      where: { id },
    });

    if (!existingEmployee) {
      throw new Error('Employee not found');
    }

    // Nomor karyawan tetap, abaikan perubahan pada nomor
    const { number, ...updateData } = data;

    // Lakukan update dengan data selain employeeNumber
    return this.prisma.employee.update({
      where: { id },
      data: updateData,
    });
  }

  async remove(id: number): Promise<Employee> {
    return this.prisma.employee.delete({ where: { id } });
  }
}

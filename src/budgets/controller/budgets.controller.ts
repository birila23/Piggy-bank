import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('budgets')
export class BudgetsController {
  @Get()
  findAll(): string {
    return;
  }

  @Post(':id')
  create(@Param('id') id: string): string {
    return;
  }
}

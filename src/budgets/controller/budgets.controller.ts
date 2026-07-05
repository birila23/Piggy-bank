import { Controller, Get, Param, Post } from '@nestjs/common';
import { IBudgetsController } from './budgets.controller.interface';

@Controller('budgets')
export class BudgetsController implements IBudgetsController {
  @Get()
  findAll(): string {
    return;
  }

  @Post(':id')
  create(@Param('id') id: string): string {
    return;
  }
}

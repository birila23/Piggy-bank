import { Module } from '@nestjs/common';
import { BudgetsController } from './controller/budgets.controller';
import { BudgetsService } from './service/budgets.service';

@Module({
  imports: [],
  controllers: [BudgetsController],
  providers: [BudgetsService],
})
export class BudgetsModule {}

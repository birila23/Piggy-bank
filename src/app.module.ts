import { Module } from '@nestjs/common';
import { BudgetsModule } from './budgets/budgets.module';
import { BudgetsService } from './budgets/service/budgets.service';
import { BudgetsController } from './budgets/controller/budgets.controller';

@Module({
  imports: [BudgetsModule],
  controllers: [BudgetsController],
  providers: [BudgetsService],
})
export class AppModule {}

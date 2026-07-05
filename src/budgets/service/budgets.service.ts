import { Injectable } from '@nestjs/common';
import { IBudgetsService } from './budgets.service.interface';

@Injectable()
export class BudgetsService implements IBudgetsService {
  findAll(): string {}
  create(): string {}
}

//esse dto é para o planejamento do começo de cada mes
import { IsISO8601, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateBudgetDto {
  @IsString()
  @IsISO8601()
  id: string;

  @IsNumber()
  @IsPositive()
  monthlyIncome: number;

  @IsNumber()
  @IsPositive()
  savingsTarget: number;
}

//esse dto é para o planejamento do começo de cada mes
import { IsISO8601, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateBudgetDto {
  @IsString()
  @IsISO8601()
  mes!: string;

  @IsNumber()
  @IsPositive()
  salario!: number;

  @IsNumber()
  @IsPositive()
  metaGuardar!: number;
}

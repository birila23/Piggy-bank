//esse é o dto de cada gasto
import {
  IsString,
  IsNumber,
  IsOptional,
  IsIn,
  IsPositive,
  IsISO8601,
} from 'class-validator';

export class AddSpentDto {
  @IsString()
  name: string;

  @IsNumber()
  @IsPositive()
  moneyValue: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsIn(['Alimentação', 'Lazer', 'Estudos', 'Saúde', 'Fixo', 'Outros'])
  category: string;

  @IsString()
  @IsISO8601()
  monthId: string;
}

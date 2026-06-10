//esse é o dto de cada gasto
import { IsString, IsNumber, IsOptional, IsIn } from 'class-validator';
export class AddSpentDto {
  @IsString()
  nome!: string;

  @IsNumber()
  valor!: number;

  @IsOptional()
  @IsString()
  descrição?: string;

  @IsIn(['Alimentação', 'Lazer', 'Estudos', 'Saúde', 'Fixo', 'Outros'])
  categoria!: string;
}

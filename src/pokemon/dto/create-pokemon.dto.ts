import { IsInt, IsPositive, IsPostalCode, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {
   
    @IsInt()
    @IsPositive()
    @Min(1)
    no:number;

    @IsString()
    @MinLength(1)
    name:string;

}



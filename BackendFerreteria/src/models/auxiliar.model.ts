import {Entity, model, property} from '@loopback/repository';
import { Usuario } from './usuario.model';

@model()
export class Auxiliar extends Usuario {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombreAuxiliar: string;

  @property({
    type: 'string',
    required: true,
  })
  registrarSugerencias: string;


  constructor(data?: Partial<Auxiliar>) {
    super(data);
  }
}

export interface AuxiliarRelations {
  // describe navigational properties here
}

export type AuxiliarWithRelations = Auxiliar & AuxiliarRelations;

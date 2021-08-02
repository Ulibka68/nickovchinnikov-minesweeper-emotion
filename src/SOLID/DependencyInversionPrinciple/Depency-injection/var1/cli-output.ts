import { IOutput } from './interfaces';
import { injectable } from 'inversify';

@injectable()
export class CliOutput implements IOutput {
  print(message: string) {
    console.log(message);
  }
}

@injectable()
export class CliOutput2 implements IOutput {
  print(message: string) {
    console.log(`message : ${message}`);
  }
}

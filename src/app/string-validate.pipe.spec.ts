import {StringValidatePipe} from "./string-validate.pipe";

describe('StringValidatePipe', () => {
  const pipe = new StringValidatePipe();

  it('input "test" shall return an error "the inserted text is not an integer"', () => {
    expect(pipe.transform('test')).toBe('the inserted text is not an integer');
  });

  it('input "11" shall return an error "the inserted text is too short and it does not contain a 9"', () => {
    expect(pipe.transform('11')).toBe('the inserted text is too short and it does not contain a 9');
  });

  it('input "108" shall return "validated"', () => {
    expect(pipe.transform('test')).toBe('the inserted text is not an integer');
  });

});

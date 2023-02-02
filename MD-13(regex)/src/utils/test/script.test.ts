import { emailValidate, nameValidate, passwordValidate, checkNameFormat, checkNameLength, checkPasswordFormat, checkEmailFormat } from '../../scripts';

describe('checkEmailFormat', () => {
  it("should return false if email dosen't contain @ symbol", () => {
    const result = checkEmailFormat("dsadasddsadasdas.com");

    expect(result).toEqual(false);
  });

  it("should accept correct email form", () => {
    const result = checkEmailFormat("dsadasddsa@dasdas.com");

    expect(result).toEqual(true);
  });
});

describe('emailValidate', () => {
  it("should return false if email dosen't contain @ symbol", () => {
    const result = emailValidate("dsadasddsadasdas.com");

    expect(result).toEqual(false);
  });

  it("should accept correct email form", () => {
    const result = emailValidate("dsadasddsa@dasdas.com");

    expect(result).toEqual(true);
  });
});


describe('checkNameFormat', () => {
  it("should accept name containing only letters", () => {
    const result = checkNameFormat("dsadasddsadasdas");

    expect(result).toEqual(true);
  });

  it("should not accept name containing letters and symbols", () => {
    const result = emailValidate("dsadasddsa@dasdas");

    expect(result).toEqual(false);
  });

  it("should not accept name containing letters and numbers", () => {
    const result = emailValidate("dsadasddsa1dasdas");

    expect(result).toEqual(false);
  });
});

describe('checkNameLength', () => {
  it("should accept number larger than 50", () => {
    const result = checkNameLength(51);

    expect(result).toEqual(false);
  });

  it("should not accept number smaller than 2", () => {
    const result = checkNameLength(2);

    expect(result).toEqual(false);
  });
});

describe('nameValidate', () => {
  it("should accept word Jhon as valid name", () => {
    const result = nameValidate("Jhon");

    expect(result).toEqual(true);
  });

  it("should not accept Jh0n as valid name", () => {
    const result = nameValidate("Jh0n");

    expect(result).toEqual(false);
  });
});

describe('checkPasswordFormat', () => {
  it("should accept Jh0nny!444 as valid password format", () => {
    const result = checkPasswordFormat("Jh0nny!444");

    expect(result).toEqual(true);
  });

  it("should not accept Jhonny!AAAA as valid password(lacks numbers)", () => {
    const result = checkPasswordFormat("Jhonny!AAAA");

    expect(result).toEqual(false);
  });

  it("should not accept Jhonny4AAAA as valid password(lacks special symbols)", () => {
    const result = checkPasswordFormat("Jhonny4AAAA");

    expect(result).toEqual(false);
  });

  it("should not accept Jhon!4 valid password(too short)", () => {
    const result = checkPasswordFormat("Jhon!4");

    expect(result).toEqual(false);
  });
});

describe('passwordValidate', () => {
  it("should accept Jh0nny!444 as valid password format", () => {
    const result = passwordValidate("Jh0nny!444");

    expect(result).toEqual(true);
  });

  it("should not accept Jhonny!AAAA as valid password(lacks numbers)", () => {
    const result = passwordValidate("Jhonny!AAAA");

    expect(result).toEqual(false);
  });

  
  it("should not accept Jhonny4AAAA as valid password(lacks special symbols)", () => {
    const result = checkPasswordFormat("Jhonny4AAAA");

    expect(result).toEqual(false);
  });

  it("should not accept Jhon!4 valid password(too short)", () => {
    const result = passwordValidate("Jhon!4");

    expect(result).toEqual(false);
  });
});


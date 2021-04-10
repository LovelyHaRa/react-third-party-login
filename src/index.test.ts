import * as ReactThridPartyLogin from ".";

describe("react-login-package", () => {
  it("should have exports", () => {
    expect(typeof ReactThridPartyLogin).toEqual("object");
  });

  it("should not have undefined exports", () => {
    Object.keys(ReactThridPartyLogin).forEach((exportKey) =>
      expect(!!ReactThridPartyLogin[exportKey]).toBeTruthy()
    );
  });
});

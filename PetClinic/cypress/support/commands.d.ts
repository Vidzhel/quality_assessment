declare namespace Cypress {
  interface Chainable<Subject> {
    createPet(forOwner: string, petName?: string, birthDate?: string, type?: string): void;
    createOwner(
      firstName?: string,
      secondName?: string,
      address?: string,
      city?: string,
      telephone?: string
    ): void;
    deletePets(forOwner: string): void;
  }
}

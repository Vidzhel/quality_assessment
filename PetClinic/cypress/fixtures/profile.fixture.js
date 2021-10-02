import { uuid } from "uuidv4";

export const ADDRESS = "Address";
export const NAME = "Name";
export const CITY = "City";
export const TELEPHONE = "1234567789";

export const PET_TYPES = {
  CAT: "cat",
  DOG: "dog",
};
export const PET_TYPE = PET_TYPES.CAT;

export const DATE = "2021/05/05";
export const ANOTHER_DATE = "2020/03/21";
export const INVALID_DATE = "2021/05/35";
export const FUTURE_DATE = "2032/05/32";

export const getUniqueName = (firstName, secondName) => {
  const uniqueFirstName = (firstName || NAME) + getHash();
  const uniqueLastName = (secondName || NAME) + getHash();

  return {
    firstName: uniqueFirstName,
    lastName: uniqueLastName,
    fullName: `${uniqueFirstName} ${uniqueLastName}`,
  };
};

const getHash = () => uuid().substr(0, 5);

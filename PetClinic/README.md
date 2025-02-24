# Petclinic

## Lab 3

Generated with the use of [Cypress Studio](https://docs.cypress.io/guides/core-concepts/cypress-studio) and located
at `cypress/integration/generated`

## Lab 6

Use `npm run test` to generate allure results, `npm run allure:report` to
generate report and start local server
Use `docker run -it -v ${PWD}:/e2e -w /e2e cypress/included:8.5.0` to run tests in docker

![](https://i.imgur.com/dQy6BmW.jpeg)

## Lab 7

Use `npm run test:parallel` to run tests in parallel. Tests parallelization is
achieved by running spec files in separate threads (depending on number of
threads specified). It's also possible to [run tests on separate machines](https://docs.cypress.io/guides/guides/parallelization), e.g.
when run by CI pipeline

Regarding parametrization, I've created a [test called `should create new pet` with arguments `createNewPetArgs`](./cypress/integration/pets.spec.js)

## Lab 8

Loading of Owners page takes a lot of time due to missing pagination
functionality. The same goes for Vets, pets lists. Also, consider adding
autocomplete with limit for pet types select input, as loading all the types is
inefficient

![](https://i.imgur.com/bCeb06r.jpeg)

Server handles load of 100 users, but fails to load owners list in
sufficient time

![](https://i.imgur.com/AgcFRUL.jpeg)
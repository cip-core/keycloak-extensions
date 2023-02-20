# keycloak-extensions

## Custom mappers

Mappers allowing to get unique identifier string based on the email, removing domain name, periods, and '@' sign.

For example, with an email address of the form 'first.last-ext@domain.com', the following mappers will return:
-   [kebab-case](https://en.wiktionary.org/wiki/kebab_case): first-last-ext
-   [PascalCase](https://en.wiktionary.org/wiki/Pascal_case): FirstLastExt
-   [snake-case](https://en.wiktionary.org/wiki/snake_case): first_last_ext

# keycloak-extensions

## Custom mappers

Mappers allowing to get unique identifier string based on the email, removing domain name, periods, and '@' sign.

For example, with an email address of the form 'first.last-ext@domain.com', the following mappers will return:
-   kebab-case: first-last-ext
-   PascalCase: FirstLastExt
-   snake-case: first_last_ext

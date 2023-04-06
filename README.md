# keycloak-extensions

## Custom mappers

### Email

Mappers allowing to get unique identifier string based on the email, removing domain name, periods, and '@' sign.

For example, with an email address of the form 'first.last-ext@domain.com', the following mappers will return:
-   [kebab-case](https://en.wiktionary.org/wiki/kebab_case): first-last-ext
-   [PascalCase](https://en.wiktionary.org/wiki/Pascal_case): FirstLastExt
-   [snake-case](https://en.wiktionary.org/wiki/snake_case): first_last_ext
-   [99l-case](#): first99last99ext
-   [99u-case](#): First99Last99Ext

### Groups

-   [cip-filter-aws-groups](src/cip-filter-aws-groups.js): Mappers to convert groups in the form of 'PREFIX-TENANT-ROLE' to an array of lists as "arn:aws:iam::<TENANT>:<SAML_PROVIDER>,arn:aws:iam::TENANT:role/ROLE"

    This mapper requires the following environment variables:

    -    CIP_AWS_GROUP_ID_PREFIX: the prefix groups should start with
    -    CIP_AWS_SAML_PROVIDER_SUFFIX: the suffix of the AWS SAML provider name used to federate AWS users authentication with Keycloak
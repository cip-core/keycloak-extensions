/**
 * source: https://stackoverflow.com/a/56223007/2714079
 *
 * Available variables:
 *   - user            - the current user
 *   - realm           - the current realm
 *   - clientSession   - the current clientSession
 *   - userSession     - the current userSession
 *   - keycloakSession - the current userSession
 */

// Deployment-specific variables from env
var groupIdPrefix = java.lang.System.getenv("CIP_AWS_GROUP_ID_PREFIX").toLowerCase();
var samlProviderSuffix = java.lang.System.getenv("CIP_AWS_SAML_PROVIDER_SUFFIX");

// Define the output as an array of list
var arrayList = Java.type('java.util.ArrayList');
var output = new arrayList();

// Get the groups the user is member of
var groupSet = user.getGroups();

// Process all the groups and generate the output
// Expected group format: <groupIdPrefix>-<AWS subscription ID>-<AWS role name>
for (var i = 0; i < groupSet.size(); i++) {
    var group = groupSet.get(i);
    if (group.getName().toLowerCase().startsWith(groupIdPrefix)) {
        var groupNameArray = (group.getName().split('-'));
        var tenant = groupNameArray[2];
        var role = groupNameArray[3];
        output.add("arn:aws:iam::" + tenant + ":" + samlProviderSuffix + ",arn:aws:iam::" + tenant + ":role/" + role);
    }
}

// Return the processed groups as an array of list
output;
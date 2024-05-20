import { ConfigDTO } from "fui";


export const google: ConfigDTO = {
  authorization_endpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
  client_id:
    '1078904476244-f15frfo2n070aft1jm66o73rfv7kcs51.apps.googleusercontent.com',
  redirect_uri: 'http://localhost:4200',
  response_type: 'id_token token',
  client_secret: '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',
  scope: 'openid email profile',
  authWellknownEndpointUrl:
    'https://accounts.google.com/.well-known/openid-configuration',
  storageUsage: 'local',
};

export const keycloak: ConfigDTO = {
  authorization_endpoint:
    'http://localhost:8080/realms/nex-km/protocol/openid-connect/auth',
  client_id: 'nex-km',
  redirect_uri: 'http://localhost:4200',
  response_type: 'id_token token',
  scope: 'openid email profile roles',
  authWellknownEndpointUrl:
    'http://localhost:8080/realms/nex-km/.well-known/openid-configuration',
  storageUsage: 'session',
};

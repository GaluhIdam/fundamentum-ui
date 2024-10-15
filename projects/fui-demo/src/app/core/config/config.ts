import { ConfigDTO } from "fui";


export const google: ConfigDTO = {
  authorization_endpoint:
    'https://keycloak.ahp.id/realms/quantum/protocol/openid-connect/auth',
  client_id: 'ahplms-beta',
  redirect_uri: 'http://localhost:4200',
  response_type: 'id_token token',
  scope: 'openid email profile roles',
  authWellknownEndpointUrl:
    'https://keycloak.ahp.id/realms/quantum/.well-known/openid-configuration',
  storageUsage: 'local',
};

export const keycloak: ConfigDTO = {
  authorization_endpoint:
    'http://localhost:8080/realms/quantum-demo/protocol/openid-connect/auth',
  client_id: 'quantum-client',
  redirect_uri: 'http://localhost:4200',
  response_type: 'id_token token',
  scope: 'openid email profile roles',
  authWellknownEndpointUrl:
    'http://localhost:8080/realms/quantum-demo/.well-known/openid-configuration',
  storageUsage: 'local',
};

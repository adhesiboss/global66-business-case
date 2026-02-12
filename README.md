## Lead capture (POST /api/lead)
El endpoint valida `name/email/slug` y está preparado para persistir en Google Sheets usando Service Account.

En este entorno, la creación de claves JSON para Service Accounts está bloqueada por una política organizacional (`iam.disableServiceAccountKeyCreation`), por lo que se implementó un fallback **mock** que:
- responde `{ ok: true, saved: false, requestId, receivedAt }`
- registra el lead en consola con trazabilidad

Para habilitar persistencia real:
- setear `SHEET_ID` y `GOOGLE_SERVICE_ACCOUNT_JSON` en `back/.env`
- compartir el Google Sheet con el `client_email` del Service Account
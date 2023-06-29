import ErrorHandler from '@/presentation/http/error-handler'
import { IController, IHttpRequest, IHttpResponse } from '@/presentation/protocols'

export class GetApiDocsController implements IController {
  constructor (
    private readonly environment: string
  ) {}

  @ErrorHandler()
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const applicationName = 'Hackaton GB 2023 - Sistema de Auditoria de Atendimentos'

    const body = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>${applicationName}</title>
          <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@4.18.2/swagger-ui.css">
      </head>
      <body>
          <div id="swagger"></div>
          <script src="https://unpkg.com/swagger-ui-dist@4.18.2/swagger-ui-bundle.js"></script>
          <script>
            SwaggerUIBundle({
              dom_id: '#swagger',
              url: '${this.environment === 'local' ? 'http://localhost:3000/local/swagger.json' : 'https://auditoria-back.prd.hackathon.grupoboticario.digital'}'
          });
          </script>
      </body>
      </html>
    `

    return {
      headers: { 'Content-Type': 'text/html' },
      statusCode: 200,
      body
    }
  }
}

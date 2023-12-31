module.exports = function (plop) {
  plop.setGenerator('lambda', {
    description: 'create new lambda',
    prompts: [
      {
        type: 'list',
        name: 'path',
        message: 'O que deseja realizar?',
        choices: ['Iniciar um novo endpoint']
      },
      {
        type: 'input',
        name: 'name',
        message: 'Nome do endpoint'
      },
      {
        type: 'input',
        name: 'verb',
        default: 'GET',
        message: 'Verbo do endpoint (GET|POST|...)'
      }
    ],
    actions: function (data) {
      const templates = []

      if (data.path === 'Iniciar um novo endpoint') {
        templates.push(
          {
            type: 'add',
            path: '../src/data/protocols/{{dashCase name}}/{{dashCase name}}-repo-protocol.ts',
            templateFile: 'templates/repo-protocol.js.hbs',
            skipIfExists: true
          },
          {
            type: 'add',
            path: '../src/domain/protocols/{{dashCase name}}/{{dashCase name}}-protocol.ts',
            templateFile: 'templates/domain-protocol.js.hbs',
            skipIfExists: true
          },
          {
            type: 'add',
            path: '../src/presentation/controllers/{{dashCase name}}/{{dashCase verb}}-{{dashCase name}}-controller.ts',
            templateFile: 'templates/controller.js.hbs',
            skipIfExists: true
          },
          {
            type: 'add',
            path: '../src/main/factories/controllers/{{dashCase name}}/validation/{{dashCase verb}}-{{dashCase name}}-validation-factory.ts',
            templateFile: 'templates/validation-factory.js.hbs',
            skipIfExists: true
          },
          {
            type: 'add',
            path: '../src/infra/adapters/typeorm/repositories/{{dashCase name}}-repository.ts',
            templateFile: 'templates/repository.js.hbs',
            skipIfExists: true
          },
          {
            type: 'add',
            path: '../src/main/factories/repositories/{{dashCase name}}-repository-factory.ts',
            templateFile: 'templates/repository-factory.js.hbs',
            skipIfExists: true
          },
          {
            type: 'add',
            path: '../src/data/use-cases/{{dashCase name}}/find-{{dashCase name}}.ts',
            templateFile: 'templates/use-case.js.hbs',
            skipIfExists: true
          },
          {
            type: 'add',
            path: '../src/main/factories/use-cases/{{dashCase name}}/find-{{dashCase name}}-factory.ts',
            templateFile: 'templates/use-case-factory.js.hbs',
            skipIfExists: true
          },
          {
            type: 'add',
            path: '../src/main/factories/controllers/{{dashCase name}}/{{dashCase verb}}-{{dashCase name}}-controller-factory.ts',
            templateFile: 'templates/controller-factory.js.hbs',
            skipIfExists: true
          },
          {
            type: 'add',
            path: '../src/main/routes/{{dashCase name}}-route.ts',
            templateFile: 'templates/route.js.hbs',
            skipIfExists: true
          },
          {
            type: 'modify',
            path: '../serverless.yml',
            pattern: /# PLOP_REPLACE/,
            templateFile: 'templates/serverless.js.hbs'
          },
          {
            type: 'modify',
            path: '../src/main/swagger/swagger.json',
            pattern: / {2}"paths": \{/,
            templateFile: 'templates/swagger.js.hbs'
          }
        )
      }

      return templates
    }
  })
}

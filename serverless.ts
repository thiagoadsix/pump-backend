import type { AWS } from '@serverless/typescript'

const serverlessConfiguration: AWS = {
  service: 'pump',
  frameworkVersion: '3',
  plugins: ['serverless-dotenv-plugin', 'serverless-esbuild', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    // eslint-disable-next-line no-template-curly-in-string
    stage: "${opt:stage,'local'}",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true
    },
    environment: {
      EXERCISE_TABLE_NAME: 'Exercises',
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      // eslint-disable-next-line no-template-curly-in-string
      AWS_ACCESS_KEY_ID: '${.env:AWS_ACCESS_KEY_ID}',
      // eslint-disable-next-line no-template-curly-in-string
      AWS_SECRET_ACCESS_KEY: '${.env:AWS_SECRET_ACCESS_KEY}',
      // eslint-disable-next-line no-template-curly-in-string
      STAGE: '${self:provider.stage}',
      // eslint-disable-next-line no-template-curly-in-string
      EXERCISE_BASE_URL: '${.env:EXERCISE_BASE_URL}',
      // eslint-disable-next-line no-template-curly-in-string
      CLOUD_FRONT_BASE_URL: '${.env:CLOUD_FRONT_BASE_URL}'
    }
  },
  // import the function via paths
  functions: {
    'get-all-exercises': {
      handler: './src/functions/get-all-exercises.main',
      timeout: 30,
      events: [
        {
          http: {
            method: 'get',
            path: 'exercises'
          }
        }
      ]
    },
    'get-by-body-part': {
      handler: './src/functions/get-by-body-part.main',
      timeout: 30,
      events: [
        {
          http: {
            method: 'get',
            path: 'exercises/body-part/{which}'
          }
        }
      ]
    },
    'get-by-equipment': {
      handler: './src/functions/get-by-equipment.main',
      timeout: 30,
      events: [
        {
          http: {
            method: 'get',
            path: 'exercises/equipment/{which}'
          }
        }
      ]
    },
    'get-by-target': {
      handler: './src/functions/get-by-target.main',
      timeout: 30,
      events: [
        {
          http: {
            method: 'get',
            path: 'exercises/target/{which}'
          }
        }
      ]
    },
    'get-by-id': {
      handler: './src/functions/get-by-id.main',
      timeout: 30,
      events: [
        {
          http: {
            method: 'get',
            path: 'exercises/{id}'
          }
        }
      ]
    },
    'save-all-gif-exercises-robot': {
      handler: './src/functions/save-all-gif-exercises-robot.main',
      timeout: 900,
      events: [
        {
          http: {
            method: 'get',
            path: 'robot/gif'
          }
        }
      ]
    },
    'create-json-exercise-data-robot': {
      handler: './src/functions/create-json-exercise-data-robot.main',
      timeout: 900,
      events: [
        {
          http: {
            method: 'get',
            path: 'robot/json'
          }
        }
      ]
    },
    'populate-table-robot': {
      handler: './src/functions/populate-table-robot.main',
      timeout: 900,
      events: [
        {
          http: {
            method: 'get',
            path: 'robot/populate'
          }
        }
      ]
    }
  },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10
    }
  }
}

module.exports = serverlessConfiguration

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
  functions: {
    'find-all-exercises': {
      handler: './src/application/lambdas/exercises/find-all-exercises-lambda.handler',
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
    'find-exercise-by-id': {
      handler: './src/application/lambdas/exercises/find-exercise-by-id-lambda.handler',
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
    'find-by-target': {
      handler: './src/application/lambdas/exercises/find-exercise-by-target-lambda.handler',
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
    'find-by-equipment': {
      handler: './src/application/lambdas/exercises/find-exercise-by-equipment-lambda.handler',
      timeout: 30,
      events: [
        {
          http: {
            method: 'get',
            path: 'exercises/equipment/{which}'
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

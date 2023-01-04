import type { AWS } from '@serverless/typescript'

const serverlessConfiguration: AWS = {
  service: 'pump',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000'
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

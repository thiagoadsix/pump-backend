// this file was generated by serverless-auto-swagger
            module.exports = {
  "swagger": "2.0",
  "info": {
    "title": "Pump API",
    "version": "1"
  },
  "paths": {
    "/exercises": {
      "get": {
        "summary": "find-all-exercises",
        "description": "",
        "operationId": "find-all-exercises.get.exercises",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/exercises/{id}": {
      "get": {
        "summary": "find-exercise-by-id",
        "description": "",
        "operationId": "find-exercise-by-id.get.exercises/{id}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/exercises/target/{which}": {
      "get": {
        "summary": "find-by-target",
        "description": "",
        "operationId": "find-by-target.get.exercises/target/{which}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "which",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/exercises/equipment/{which}": {
      "get": {
        "summary": "find-by-equipment",
        "description": "",
        "operationId": "find-by-equipment.get.exercises/equipment/{which}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "which",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/exercises/body-part/{which}": {
      "get": {
        "summary": "find-by-body-part",
        "description": "",
        "operationId": "find-by-body-part.get.exercises/body-part/{which}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "which",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/workouts": {
      "post": {
        "summary": "create-workout-list",
        "description": "",
        "operationId": "create-workout-list.post.workouts",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/workouts/user/{userId}": {
      "get": {
        "summary": "find-all-workouts-by-user-id",
        "description": "",
        "operationId": "find-all-workouts-by-user-id.get.workouts/user/{userId}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "userId",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/workouts/{id}/user/{userId}": {
      "get": {
        "summary": "find-workout-by-id-and-user-id",
        "description": "",
        "operationId": "find-workout-by-id-and-user-id.get.workouts/{id}/user/{userId}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "userId",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      },
      "delete": {
        "summary": "delete-workout-by-id",
        "description": "",
        "operationId": "delete-workout-by-id.delete.workouts/{id}/user/{userId}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "userId",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/workouts/{id}/user/{userId}/exercise": {
      "post": {
        "summary": "add-exercise-to-workout-list",
        "description": "",
        "operationId": "add-exercise-to-workout-list.post.workouts/{id}/user/{userId}/exercise",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "userId",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/robot/populate-table": {
      "post": {
        "summary": "populate-table-robot",
        "description": "",
        "operationId": "populate-table-robot.post.robot/populate-table",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/users": {
      "post": {
        "summary": "create-user",
        "description": "",
        "operationId": "create-user.post.users",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    }
  },
  "definitions": {},
  "securityDefinitions": {},
  "host": "localhost"
};
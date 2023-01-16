# Pump
## Introduction
Pump is a back-end project that aims to provide a simple and efficient way to manage workout and exercise routines. The project is built using Node.js, TypeScript, AWS, Lambda and DynamoDB, and is designed to be easily extensible and adaptable to different use cases.

## Getting Started
To get started using Pump, you will first need to clone the repository and install the necessary dependencies, the version of the Node must be 16v:

```bash
git clone https://github.com/yourusername/pump.git
cd pump
npm install
```
Once the dependencies are installed, you will need to set up the docker-compose, to run the LocalStack in your machine. Once this is done, you can start the server by running:

```bash
docker-compose up -d
```
Start the application:

```bash
npm run sls:offline
```

The server will now be running on `http://localhost:3000/local` by default.

## API Endpoints
Pump provides a simple RESTful API for managing workout and exercise data. The following endpoints are available:

### Workouts
- **GET** /workouts/user/:userId : Retrieve a list of all workouts by user.
- **GET** /workouts/:id : Retrieve a specific workout by ID.
- **POST** /workouts: Create a new workout.
    - Body:
        ```json
        "title": "Real Madrid Barcelo",
        "userId": "4cb4866b-a240-419a-b4f2-3d762d29eb17"
        ```
- **POST** /workouts/:id : Add a exercises to a specific workout.
- **DELETE** /workouts/:id/user/:userId : Delete a specific workout by ID and userId.

### Exercises
- **GET** /exercises: Retrieve a list of all exercises.
- **GET** /exercises/:id : Retrieve a specific exercise by given an ID.
- **GET** /exercises/body-part/:which : Retrieve a specific exercise by body part.
- - back | card | chest | lower arms | lower legs | neck | shoulders | upper arms | upper legs | waist
- **GET** /exercises/target/:which : Retrieve a specific exercise by target.
- - abductors | abs | adductors | biceps | calves | cardiovascular system | delts | forearms | glutes | hamstrings | lats | levator scapulae | pectorals | quads | serratus anterior | spine | traps | triceps | upper back
- **GET** /exercises/equipment/:which : Retrieve a specific exercise by equipment.
- - assisted | band | barbell | body weight | bosu ball | cable | dumbbell | elliptical machine | ez barbell | hammer | kettlebell | leverage machine | medicine ball | olympic barbell | resistance band | roller | rope | skierg machine | sled machine | smith machine | stability ball | stationary bike | stepmill machine | tire | trap bar | upper body ergometer | weighted | wheel roller








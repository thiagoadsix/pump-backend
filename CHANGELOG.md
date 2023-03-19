# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.3.1](https://github.com/thiagoadsix/pump-backend/compare/v1.3.0...v1.3.1) (2023-03-19)


### Code Refactoring

* **envs:** update the name of the envs ([10c93a9](https://github.com/thiagoadsix/pump-backend/commit/10c93a980e7c9e8d29fa9e0af66615a3ecd6dae7))

## [1.3.0](https://github.com/thiagoadsix/pump-backend/compare/v1.2.2...v1.3.0) (2023-03-19)


### Features

* **authorization:** implements the service of authorization and update the robots ([1891935](https://github.com/thiagoadsix/pump-backend/commit/189193587d9a42687a525e98bcc2badd3b01a680))
* **env:** add env to firabase ([5821ca7](https://github.com/thiagoadsix/pump-backend/commit/5821ca7a3bf5ffbc5eece3fb3d1d8258a3c41467))
* **pipeline:** add gitchub actions to implements the ci/cd ([e31f03a](https://github.com/thiagoadsix/pump-backend/commit/e31f03a7d11a83575675db6633681a31c874d03d))
* **user:** create usecase responsible to create a user on firebase ([041164a](https://github.com/thiagoadsix/pump-backend/commit/041164a6fc7db775cfc038d95f82f20dcafdbe95))


### Code Refactoring

* **credentials:** update how to get the credentials to AWS ([146d3f7](https://github.com/thiagoadsix/pump-backend/commit/146d3f7352e12471471fb4318c6e797e9941bed9))

### [1.2.2](https://github.com/thiagoadsix/pump/compare/v1.2.1...v1.2.2) (2023-01-23)


### Bug Fixes

* **workout:** when the exerciseIds is empty, do not make query by ids on exercise repository ([d8c5327](https://github.com/thiagoadsix/pump/commit/d8c532730867399c9e5351f5b7102e600d6e95fd))

### [1.2.1](https://github.com/thiagoadsix/pump/compare/v1.1.1...v1.2.1) (2023-01-23)


### Code Refactoring

* **workout:** add the exercise to workout output usecases ([8bbb9dd](https://github.com/thiagoadsix/pump/commit/8bbb9ddb9e5d014fe9dadd18b4fc65209c2bda74))


### Others

* **merge:** just to merge origin to local ([ee1a9e5](https://github.com/thiagoadsix/pump/commit/ee1a9e5df57d36a804b02db6d1f4789bc4a4e4e1))
* **standard-version:** add custom types to standard-version ([08cb0ab](https://github.com/thiagoadsix/pump/commit/08cb0ab2d3462efeaea1b0684e253ff3cd021629))

## [1.2.0](https://github.com/thiagoadsix/pump/compare/v1.1.1...v1.2.0) (2023-01-21)


### Features

* **doc:** add documentation with swagger ([45a08c8](https://github.com/thiagoadsix/pump/commit/45a08c8e12a4f66ca89d73d27608179ea5a1977f))


### Others

* **package-lock:** update the package-lock ([048336b](https://github.com/thiagoadsix/pump/commit/048336bc7d22d53aa47b4299402b4436a31a89d4))
* **package:** update the version of node ([6f1ec99](https://github.com/thiagoadsix/pump/commit/6f1ec99ef39cef5ef56a35ad0b8ed7b03aa4c284))
* **standard-version:** add custom types to standard-version ([08cb0ab](https://github.com/thiagoadsix/pump/commit/08cb0ab2d3462efeaea1b0684e253ff3cd021629))

### [1.1.11](https://github.com/thiagoadsix/pump/compare/v1.1.10...v1.1.11) (2023-01-20)


### Code Refactoring

* **workout:** fix the tests imports and name of properties ([fde6215](https://github.com/thiagoadsix/pump/commit/fde6215b196f6c3eef0b7f26739a59fcc2b65cba))

### [1.1.10](https://github.com/thiagoadsix/pump/compare/v1.1.9...v1.1.10) (2023-01-20)


### Code Refactoring

* **workout:** fix the fuction to add new exercise to woekout list ([c12eaf9](https://github.com/thiagoadsix/pump/commit/c12eaf908c29af33e65929abb829de2ce103aff4))

### [1.1.9](https://github.com/thiagoadsix/pump/compare/v1.1.1...v1.1.9) (2023-01-20)


### Others

* **standard-version:** add custom types to standard-version ([08cb0ab](https://github.com/thiagoadsix/pump/commit/08cb0ab2d3462efeaea1b0684e253ff3cd021629))


### Code Refactoring

* **workouts:** update the workout entity and CreateWorkoutListUsecase ([0770ce6](https://github.com/thiagoadsix/pump/commit/0770ce6929e78e1c04f491919bee3263eec620f4))
* **workout:** update the AddExerciseToWorkoutListUsecase ([67ffed6](https://github.com/thiagoadsix/pump/commit/67ffed6525a44c12a2937a929543197f6b822af6))
* **workout:** update the FindWorkoutByIdAndUserIdUsecase ([38cb66b](https://github.com/thiagoadsix/pump/commit/38cb66b73f2935472fd87f7a74a2f7ecfd5a888e))
* **workout:** update the FindWorkoutByUserIdUsecase ([30ecdec](https://github.com/thiagoadsix/pump/commit/30ecdec641e633d734cc10d3ec13979125d29e0b))

### [1.1.8](https://github.com/thiagoadsix/pump/compare/v1.1.1...v1.1.8) (2023-01-19)


### Performance Improvements

* **environment:** add scripts to create table and bucket locally ([5336611](https://github.com/thiagoadsix/pump/commit/53366116d2df73fb638909cd5f6d271b2ba2d493))


### Others

* **standard-version:** add custom types to standard-version ([08cb0ab](https://github.com/thiagoadsix/pump/commit/08cb0ab2d3462efeaea1b0684e253ff3cd021629))

### [1.1.7](https://github.com/thiagoadsix/pump/compare/v1.1.1...v1.1.7) (2023-01-19)


### Performance Improvements

* **directory:** improve the structure of the domain folder ([e6cefeb](https://github.com/thiagoadsix/pump/commit/e6cefebdbcbc290713df9afb504d159c321c7f87))


### Others

* **standard-version:** add custom types to standard-version ([08cb0ab](https://github.com/thiagoadsix/pump/commit/08cb0ab2d3462efeaea1b0684e253ff3cd021629))

### [1.1.6](https://github.com/thiagoadsix/pump/compare/v1.1.1...v1.1.6) (2023-01-19)


### Performance Improvements

* **paths/imports:** just add the new paths: domain, application and infrastructure ([ee8373e](https://github.com/thiagoadsix/pump/commit/ee8373e41cb837c8f8973b86fa43f86cb571c908))


### Others

* **standard-version:** add custom types to standard-version ([08cb0ab](https://github.com/thiagoadsix/pump/commit/08cb0ab2d3462efeaea1b0684e253ff3cd021629))

### [1.1.4](https://github.com/thiagoadsix/pump/compare/v1.1.3...v1.1.4) (2023-01-18)


### Performance Improvements

* **poop:** just to test ([70e01d9](https://github.com/thiagoadsix/pump/commit/70e01d9981ec49a9befc8b56e7a8291e54c64d42))
* **test:** improve the test from FindExerciseByBodyPartUsecase ([53d5d08](https://github.com/thiagoadsix/pump/commit/53d5d0816305a16970d26a6f826a77078498da6f))
* **test:** improve the test from FindExerciseByEquipment ([94f1933](https://github.com/thiagoadsix/pump/commit/94f1933555c49373362c6163ac9e056706c3b3da))
* **test:** improve the tests from FindExerciseByIdUsecase ([714a4fd](https://github.com/thiagoadsix/pump/commit/714a4fdb71edafa2c5b0c7af0ba2e8368ab7ab7e))
* **test:** improve the tests from FindExercisesByTargetUsecase ([7e34c91](https://github.com/thiagoadsix/pump/commit/7e34c91ed39a397ce0ede6ba56b35bb116e32617))


### Tests

* **test:** improve the tests from FindAllExercisesUsecase ([51e6b82](https://github.com/thiagoadsix/pump/commit/51e6b8258e24e8ea98a5f3accc741d64757dd8cb))

### [1.1.3](https://github.com/thiagoadsix/pump/compare/v1.1.2...v1.1.3) (2023-01-17)


### Performance Improvements

* **test:** improve the tests for DeleteWorkoutByIdUsecase ([6a4184c](https://github.com/thiagoadsix/pump/commit/6a4184cfea5fee2508807469f50dbdefe25d1900))
* **test:** improve the tests from FindAllWorkoutUsecase ([8974208](https://github.com/thiagoadsix/pump/commit/8974208c05d7f343a38b56e611d41d09a92a59af))
* **test:** improve the tests from FindWorkoutByIdUsecase ([d013274](https://github.com/thiagoadsix/pump/commit/d01327489128b7ed6af74042f9b0f77b1ef9b144))

### [1.1.2](https://github.com/thiagoadsix/pump/compare/v1.1.1...v1.1.2) (2023-01-17)


### Performance Improvements

* **test:** improve the test for CreateWorkoutListUsecase ([54df573](https://github.com/thiagoadsix/pump/commit/54df5738f205884dece93edaae17470a78e004bc))


### Others

* **standard-version:** add custom types to standard-version ([08cb0ab](https://github.com/thiagoadsix/pump/commit/08cb0ab2d3462efeaea1b0684e253ff3cd021629))

## 1.1.0 (2023-01-16)


### Features

* add createWorkoutList service ([0973be7](https://github.com/thiagoadsix/pump/commit/0973be703f360dba2ec440c3fc11f20d7fe8d73e))
* add deleteWorkoutById service ([2d855c3](https://github.com/thiagoadsix/pump/commit/2d855c3b7152ad493b51853d9f31d4a7cca0a2ca))
* add findAllWorkouts service ([960bb85](https://github.com/thiagoadsix/pump/commit/960bb8557c2a4de173e663d04a5b9f422326904d))
* add findAllWorkoutsWithExercises service ([6f8d727](https://github.com/thiagoadsix/pump/commit/6f8d7273e26fb83bed87ba8c4a1924c8683aa779))
* add findWorkoutById service ([08c655d](https://github.com/thiagoadsix/pump/commit/08c655df9c6c388a2a23acc352034ea269a4e3e8))
* add localstack and create robots to populate locally ([d456b34](https://github.com/thiagoadsix/pump/commit/d456b34cfbe9558654d491e0df5176419f9e5967))
* add new configuration to node js ([727e743](https://github.com/thiagoadsix/pump/commit/727e743ca57b87dd3b84a2409bbe59ac1ec17e5d))
* add new env configs based on stage of the application ([37be4ca](https://github.com/thiagoadsix/pump/commit/37be4ca03fe822e2ecffeb480a1b9eafb8a880ad))
* add robots ([7485cbe](https://github.com/thiagoadsix/pump/commit/7485cbe9ea7d9acfca3bca067fdec4a234774e80))
* add robots to the service ([62fb7e9](https://github.com/thiagoadsix/pump/commit/62fb7e90e78004cf77863a215028f1fc75a8df1d))
* add service to add new exercises to a list ([360cb76](https://github.com/thiagoadsix/pump/commit/360cb76b9dd127620b3a93ed79e495b4ef04143d))
* add service to get exercise by bodyPart ([984f70c](https://github.com/thiagoadsix/pump/commit/984f70c29f1f8740d8df94f50f2447277727649c))
* add service to get exercise by equipment ([4fe0a07](https://github.com/thiagoadsix/pump/commit/4fe0a07ff4265f5ce774c8f3f87fea93254b1d8f))
* add service to get exercise by id ([c9ff30f](https://github.com/thiagoadsix/pump/commit/c9ff30f7e73297d3d2da48f7caea583e1db18370))
* add service to get exercise by target ([6ea9173](https://github.com/thiagoadsix/pump/commit/6ea91735f4371189fbdac6925c8d3e1cb8d33ba3))

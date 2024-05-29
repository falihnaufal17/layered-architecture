# Layered Architecture

## Prequesite
- NodeJs v20.x.x

## Structure
```
layered-architecture/
│
├── src/
│   ├── modules/ <-- daftar module
│   │   ├── example/ <-- module
│   │   │   ├── data-accesses/ <-- data layer, koneksi database dan model
│   │   │   |   ├── dummies/ <-- dummy data
│   │   │   |   └── models/ <-- medefinisikan model data
│   │   │   ├── controllers/ <-- business layer, logika bisnis, handle I/O
│   │   │   ├── services/ <-- service layer, pengubung antar module
│   │   │   ├── routes/ <-- route
│   │   │   ├── repositories/ <-- manipulasi data (find, insert, update, destroy)
│   │   │   ├── dto/ <-- mendefinisikan struktur object yang akan dikirim atau diterima
│   │   │   └── package.json <-- dependency, such as lodash, mysql2, sequelize, etc
│   │
│   ├── app.ts <-- main app
│
├── tsconfig.json <-- ts config
└── package.json <-- dependecy for root (not module)

```

## Getting Started
1. clone repo `git clone git@github.com:falihnaufal17/layered-architecture.git`
2. change directory `cd layered-architecture`
3. run command `npm install`
4. duplicate `.env.example` and rename it into `.env`
5. run command `npm start:dev`

## Deployment
Just run command `npm start`. It will remove build folder and rebuild the application and run the server.
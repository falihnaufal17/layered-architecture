# Layered Architecture

## Prequesite
- NodeJs v20.x.x

## Structure
```
layered-architecture/
│
├── src/
│   ├── configs/ <-- konfigurasi database, cache, bucket storage, dll
│   ├── modules/ <-- daftar module
│   │   ├── example/ <-- module
│   │   │   ├── data-accesses/ <-- data layer, koneksi database dan model
│   │   │   |   ├── dummies/ <-- dummy data
│   │   │   |   └── models/ <-- medefinisikan model data
│   │   │   ├── controllers/ <-- handle I/O
│   │   │   ├── services/ <-- menanangani logika bisnis
│   │   │   ├── routes/ <-- route
│   │   │   ├── repositories/ <-- mengakses database, interaksi dengan layanan eksternal (contoh: API Eksternal)
│   │   │   ├── dto/ <-- mendefinisikan struktur object I/O
│   │   │   ├── interfaces/ <-- antarmuka
│   │   │   └── package.json <-- dependency/library/package/command, such as lodash, mysql2, sequelize, etc
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
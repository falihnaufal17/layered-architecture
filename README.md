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
│   │   │   ├── controllers/ <-- business layer, logika bisnis
│   │   │   ├── services/ <-- service layer, pengubung antar module
│   │   │   ├── routes/ <-- route khusus /doctor
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
3. run `npm install`
4. duplicate `.env.example` and rename it into `.env`
5. run `npm start:dev`

## Deployment
run `npm start`. It will remove build the application and run the server.
# Node API for GET cars list & car by ID

> This simple cars-node-app build without DB

```
# Routes
GET  /              - welcome page
GET  /api/cars      - list all cars
GET  /api/cars/:id  - get car details by ID

```

## Usage

```
# Install dependencies
npm install

# Run
npm start

```

## Docker

```
# Image
vamsichilukuri/cars-node-app:latest

# Build image
docker build -t dockerid/reponame:tag .

# Run container
docker run -it -dp 3000:3000 dockerid/reponame:tag

```
#pull directly image and test
> docker run -it -dp 3000:3000 vamsichilukuri/cars-node-app:latest

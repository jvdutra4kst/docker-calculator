# Docker Calculator
A simple Docker Calculator made with Express & Node.js to train docker

### Ports
All containers uses port 8000 inside docker network. As specified in docker-compose.yml, below are listed the ports that are exposed to the docker host.

* 8000 - Main App
* 8100 - Division App
* 8200 - Multiplication App
* 8300 - Subtraction App
* 8400 - Sum App

### Routes
* GET / - Main Testing Route

* POST /division - Division App
* POST /multiplication - Multiplication App
* POST /subtraction - Subtraction App
* POST /sum - Sum App
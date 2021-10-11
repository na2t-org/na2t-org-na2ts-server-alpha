# TODO

## BACKEND

- Create Scripts for FaunaDB Creation and sample documents.

### Info to add

- Install FastAPI on the server, part by part, not as a whole. `pip install fastapi` then `pip install uvicorn[standard]`
- For Development Machines, use `pip install fastapi[all]`

## FRONTEND

- Frontend requires a node runtime to compile into static (with js) files. You can pre-compile this step. `npm install` after cd-ing into that folder.

## DOCKER

- Implement a multistage build process, Build frontend (compile to static files), copy those files to <https://github.com/tiangolo/uvicorn-gunicorn-fastapi-docker> and then copy backend and the nginx conf, install backend stuff, finally run the container.

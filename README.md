### important notes 

- If all your images live inside your docker hub, make sure to name your image  in the following format <your user id>/<name of your image>

for example: $ docker image tag web:latest mydockerhubusername/nodejs:latest

- If you change the express server e.g. add a new route make sure you stop the server by typing control + c in the terminal then restart the server. 

### The process of containerizing an app looks like this:

1. Start with your application code and dependencies.
2. Create a Dockerfile that describes your app, its dependencies, and how to run it.
3. Feed the Dockerfile into the docker image build command.
4. Push the new image to a registry (optional).
5. Run the container from the image.

### execution flow

1. docker image build -t mydockerhubusername/nodejs-v1:latest . (build image from Dockerfile)
2. docker image ls (to check that the image has been successfully from the Dockerfile)
3. docker image inspect mydockerhubusername/nodejs-v1:latest (check the config of the image)
4. docker login / docker login docker.io
5. docker image push mydockerhubusername/nodejs-v1:latest (push it to Docker Hub)

This translates to a repository called nodejs-v1 and an image tagged as latest

Before you can push an image, you need to tag it in a special way. This is because Docker needs all of the following information when pushing an image:

Registry
Repository
Tag

Now that the image is pushed to a registry, you can access it from anywhere with an internet connection. You can also grant other people access to pull it and push changes

6. docker container run -d --name container1 -p 5555:5555 mydockerhubusername/nodejs-v1 (launch container from image)
7. check container is running with docker container ls
8. navigate to localhost:5555

After you finihsed you can remove the images and containers with the following commands: 

You should stop the container first with docker container stop <Conatiner ID Conatiner ID>

- docker container prune -f

- docker image prune -f
- docker image prune --all

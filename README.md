# Introduction 📜

This is a Hello World example for RabbitMQ Messaging Server and Node.js. This repository is for students who want to learn about RabbitMQ and messaging systems. I am using Ubuntu Linux for this tutorial..

👉 You need to install Node.js and RabbitMQ on your Operating System.

👉 But you can also run RabbitMQ with Docker Desktop if you want.

👉 How install RabbitMQ on Ubuntu? https://github.com/pedrohenriquecardoso/rabbitmq-install-ubuntu

## Installation ☕️

1. Clone the repository.

    ```sh
    git clone https://github.com/pedrohenriquecardoso/rabbitmq-hello-world.git
    ```
2. Navigate to the project directory.

    ```sh
    cd rabbitmq-hello-world
    ```
    
3. Use npm install to install all necessary frameworks and libraries.

    ```sh
    npm i
    ```

4. If you have RabbitMQ installed, run rabbitmq-server.

    ```sh
    sudo systemctl start rabbitmq-server
    ```

5. If you don't have RabbitMQ installed, you can run it in a Docker container.

    ```sh
    docker run -it --rm --name rabbitmq -p 5552:5552 -p 15672:15672 -p 5672:5672  \
        -e RABBITMQ_SERVER_ADDITIONAL_ERL_ARGS='-rabbitmq_stream advertised_host localhost' \
        rabbitmq:4-management
    ```

6. Wait for the server to start and then enable the stream and stream management plugins.

    ```sh
    docker exec rabbitmq rabbitmq-plugins enable rabbitmq_stream rabbitmq_stream_management 
    ```

7. Test rabbitmq-server status.

    ```sh
    sudo systemctl status rabbitmq-server
    ```

8. Run the receive script.

    ```sh
    npm run receive
    ```

9. Run the send script in another terminal.

    ```sh
    npm run receive
    ```

10. Now you should see "Received: Hello, RabbitMQ!" in the receive terminal. 
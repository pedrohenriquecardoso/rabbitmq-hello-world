# Introduction 📜

This is a Hello World example for RabbitMQ Messaging Server and Node.js. This repository is for students who want to learn about RabbitMQ and messaging systems.

👉 You need to install Docker Desktop, Node.js, and RabbitMQ on your Operating System.

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

4. If you don't have RabbitMQ installed, you can run it in a Docker container.

    ```sh
    docker run -it --rm --name rabbitmq -p 5552:5552 -p 15672:15672 -p 5672:5672  \
        -e RABBITMQ_SERVER_ADDITIONAL_ERL_ARGS='-rabbitmq_stream advertised_host localhost' \
        rabbitmq:4-management
    ```

5. Wait for the server to start and then enable the stream and stream management plugins.

    ```sh
    docker exec rabbitmq rabbitmq-plugins enable rabbitmq_stream rabbitmq_stream_management 
    ```

6. Test rabbitmq-server status.

    ```sh
    sudo systemctl status rabbitmq-server
    ```

7. Run the receive script.

    ```sh
    npm run receive
    ```

8. Run the send script in another terminal.

    ```sh
    npm run receive
    ```

9. Now you should see "Received: Hello, RabbitMQ!" in the receive terminal. 
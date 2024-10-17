# BullMQ - Message Queue Example

This repository demonstrates the basic use of a message queue using [BullMQ](https://docs.bullmq.io/). You will learn how to set up a producer to add jobs to a queue and a worker to process those jobs. Redis is used as the message broker to manage the queue.

## What I Learned

### 1. **Message Queues**
A message queue is a form of asynchronous communication between services. It allows decoupling between producers (who send jobs) and workers (who process jobs) in a scalable and reliable manner.

- **Producer**: The part of the application responsible for adding jobs to the queue.
- **Worker**: The part responsible for consuming (processing) those jobs from the queue.

### 2. **BullMQ**
BullMQ is a powerful library that allows us to work with Redis-based message queues in Node.js applications. It helps in creating, managing, and processing jobs.

- **Producer Side**: We learned how to set up a queue and add jobs to it.
- **Worker Side**: We learned how to process jobs from the queue using workers.

### 3. **Redis**
Redis is used as the backend message broker. It efficiently stores the jobs and allows both the producer and worker to communicate asynchronously through the queue.

- Redis is the in-memory data structure store used to hold the message queue, ensuring fast reads/writes.

### 4. **BullMQ Features Implemented**
- **Queue Creation**: We created a queue named `email-queue` to simulate sending emails.
- **Job Addition**: The producer adds a job to the queue with details such as recipient email, subject, and body.
- **Worker Processing**: The worker listens for new jobs, processes them, and simulates sending an email.

## How to Run This Project

### Prerequisites

- **Node.js**: Make sure you have Node.js installed. You can download it [here](https://nodejs.org/).
- **Redis**: You need Redis running locally or use a remote Redis instance. You can download and run Redis from [here](https://redis.io/download).

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/vikaskr-07/message-queue.git
2. Install the dependencies:
   ```bash
   npm install
3. Start Redis server locally on port 6379 or connect to your Redis instance.
4. Running the Producer
   ```bash
   node producer.js
5. Running the Worker
   ```bash
   node worker.js


const { Worker } = require('bullmq');

const sendmail = () => new Promise((res,rej)=> {
    setTimeout(() => res(), 5000 )
});

const worker = new Worker("email-queue", async(job) => {
    console.log(`Message recieve id: ${job.id}`);
    console.log("Processing message");
    console.log(`Sending email to ${job.data.email}`);
    await sendmail();
    console.log("email sent")
},
{
        connection: {
            host: '127.0.0.1',
            port: 6379 
        }
});


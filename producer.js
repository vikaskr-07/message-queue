const {Queue} = require('bullmq');


const notificationqueue = new Queue('email-queue',{
    connection:{
        host:'127.0.0.1',
        port:6379

    }
});

 async function init() {
    const res = await notificationqueue.add('email to vikas', {
        email:"vikaskum7ar@gmail.com",
        subject:"hello-ji",
        body:"holaaa"
    });
    console.log('Job is added to queue :', res.id);
}

init();


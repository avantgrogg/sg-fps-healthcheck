import cron from 'node-cron';

cron.schedule(`*/5 * * * *`, async () => {
  console.log('running your task...');
});

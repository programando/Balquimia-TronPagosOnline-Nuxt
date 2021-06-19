const autorestart = true;
const watch = true;
const maxMemoryRestart = '512M';

module.exports = {
  apps: [
    {
      name: 'PagosBalquimia',
      instances: 1,
      autorestart,
      watch,
      port: 3000,
      max_memory_restart: maxMemoryRestart,
      exec_mode: 'cluster',
      //instances: 'max', // Or a number of instances
      //script: './node_modules/nuxt/bin/nuxt.js',
      //args: 'start'
      script: 'npm run clear && npm run build && npm run start'
    }
  ]
}

//npm run build
//pm2 start
//pm2 ls
//https://stackoverflow.com/questions/51875055/how-to-run-nuxt-under-pm2
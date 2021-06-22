module.exports = {
  apps: [
    {
      name: 'Pagos',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start'
    }
  ]
}


/*

module.exports = {
  apps: [{
    name: "Internal API",
    script: "./internal_api/bundle.js",
    watch: true,
    kill_timeout: 10000,
    wait_ready: true,
    env_production: {
      NODE_ENV: "production",
      NODE_CONFIG_DIR: "./config"
    },
  }],
};

*/
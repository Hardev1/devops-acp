const myConsole = {
    log: function (message) {
      console.log(`[LOG] ${message}`);
    },
    warn: function (message) {
      console.warn(`[WARN] ${message}`);
    },
    error: function (message) {
      console.error(`[ERROR] ${message}`);
    },
  };
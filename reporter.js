const { defineConfig } = require('@playwright/test');

class Reporter{

    onBegin(config, suite){
        console.log(`starting test ${suite.allTests().length} tests`);
    }

    onTestBegin(test){
        console.log(`Starting test ${test.title}`);
    }

    onTestEnd(test){
        console.log(`Finished test ${test.title} with status: ${result.status}`);
    }

    onEnd(result){
        console.log(`Finished the test ${result.status}`);
    }
}

module.exports = defineConfig({
    reporter: './reporter.js',
  });
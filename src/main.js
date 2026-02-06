const getJoke = require("./joke");
const core = require("@actions/core");

async function run() {
  try {
    const joke = await getJoke();
    console.log(joke);
    core.setOutput("joke", joke);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

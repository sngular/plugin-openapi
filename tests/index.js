const { generateWorkflowFile } = require('../index.js');
generateWorkflowFile('./tests/testComplete.yml', 'workflow.yml', {
  generator: {
    pathParams: false,
  },
});

# WorkflowTemplate
This is a template for a workflow. It is meant to be used as a starting point for a new workflow.

## Usage
1. Create a new repository from this template
2. Copy the files from the `workflow` directory to the root of your repository
3. Execute the `workflow` script to start the workflow

## Build Stage
The build stage is used to build the project. It is executed by the `Build` script.

## Test Stage
The test stage is used to test the project by usage of UT/ST/Acceptance tests. It is executed by the `Test` script.

## Maintainance Stage
The maintainance stage is used for maintainance tasks, including routine dependency update, PR lint. It is executed by the `Dep_upgrade`, `PR_lint` script.


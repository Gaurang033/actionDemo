import * as core from '@actions/core'
import * as github from '@actions/github'

async function run(): Promise<void> {
  core.debug("should not fail")
  core.info("hello world info message")
  try {
    // const token = core.getInput('github-token', {required: true})

    const {pull_request: pr} = github.context.payload
    if (!pr) {
      throw new Error('Event payload missing `pull_request`')
    }

    for (const key in pr) {
      core.debug(key)
    }

    // const client = new github.GitHub(token)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()

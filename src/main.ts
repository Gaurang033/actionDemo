import * as core from '@actions/core'
import * as github from '@actions/github'

async function run(): {
  try {
    // const token = core.getInput('github-token', {required: true})

    const {pull_request: pr} = github.context.payload
    if (!pr) {
      throw new Error('Event payload missing `pull_request`')
    }

    for (const key in pr) {
      console.log(key)
    }

    // const client = new github.GitHub(token)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()

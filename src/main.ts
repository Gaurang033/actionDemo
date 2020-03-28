import * as core from '@actions/core'
import * as github from '@actions/github'

async function run(): Promise<void> {
  core.info('-------------- info message -----------')
  try {
    // const token = core.getInput('github-token', {required: true})

    const {pull_request: pr} = github.context.payload
    if (!pr) {
      throw new Error('Event payload missing `pull_request`')
    }

    core.info('type of pr:  ${typeof pr}')
    core.info("type of commits:  ${typeof pr['commit']}")

    for (const key in pr) {
      core.info(key)
      core.info(pr[key])
      core.info('---         ---')
    }

    core.info('------------------------')
    for (const commit in pr['commits']) {
      core.info(commit)
    }

    core.info(pr.commits.length)
    // const client = new github.GitHub(token)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()

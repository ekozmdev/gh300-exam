#!/usr/bin/env node

import { readdir } from 'node:fs/promises'
import { spawnSync } from 'node:child_process'
import { join } from 'node:path'
import process from 'node:process'

const dataDir = 'data'
const validatorPath = '.agents/skills/quiz-json-output/scripts/validate-quiz-json.mjs'

const entries = await readdir(dataDir, { withFileTypes: true }).catch((error) => {
  process.stderr.write(`Failed to read ${dataDir}: ${error.message}\n`)
  process.exit(1)
})

const quizFiles = entries
  .filter((entry) => entry.isFile() && entry.name.endsWith('.json'))
  .map((entry) => join(dataDir, entry.name))
  .sort((left, right) => left.localeCompare(right, 'en'))

if (quizFiles.length === 0) {
  process.stderr.write(`No quiz JSON files found in ${dataDir}.\n`)
  process.exit(1)
}

for (const quizFile of quizFiles) {
  const result = spawnSync(process.execPath, [validatorPath, quizFile], {
    encoding: 'utf8',
  })

  if (result.stdout) process.stdout.write(`${quizFile}: ${result.stdout}`)
  if (result.stderr) process.stderr.write(`${quizFile}: ${result.stderr}`)

  if (result.status !== 0) {
    process.exit(result.status ?? 1)
  }
}

process.stdout.write(`${quizFiles.length} quiz file(s) validated.\n`)

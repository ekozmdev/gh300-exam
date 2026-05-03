#!/usr/bin/env node

import { readdir } from 'node:fs/promises'
import { spawnSync } from 'node:child_process'
import { dirname, join, resolve } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const appRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const repoRoot = resolve(appRoot, '..')
const dataDir = join(appRoot, 'data')
const validatorPath = join(repoRoot, '.agents/skills/quiz-json-output/scripts/validate-quiz-json.mjs')

const entries = await readdir(dataDir, { withFileTypes: true }).catch((error) => {
  process.stderr.write(`Failed to read ${dataDir}: ${error.message}\n`)
  process.exit(1)
})

const quizFiles = entries
  .filter((entry) => entry.isFile() && entry.name.endsWith('.json'))
  .map((entry) => ({
    path: join(dataDir, entry.name),
    displayPath: join('data', entry.name),
  }))
  .sort((left, right) => left.displayPath.localeCompare(right.displayPath, 'en'))

if (quizFiles.length === 0) {
  process.stderr.write(`No quiz JSON files found in ${dataDir}.\n`)
  process.exit(1)
}

for (const quizFile of quizFiles) {
  const result = spawnSync(process.execPath, [validatorPath, quizFile.path], {
    encoding: 'utf8',
  })

  if (result.stdout) process.stdout.write(`${quizFile.displayPath}: ${result.stdout}`)
  if (result.stderr) process.stderr.write(`${quizFile.displayPath}: ${result.stderr}`)

  if (result.status !== 0) {
    process.exit(result.status ?? 1)
  }
}

process.stdout.write(`${quizFiles.length} quiz file(s) validated.\n`)

import { Configuration as CFG } from 'webpack'

import { Bundler } from '../lib/Bundler'
import { Config as Args, Env } from '../config/argv'

import { createConfig } from './config'
import { server } from './server'
import { build } from './build'

export const bundler = (args: Args, env: Env): Bundler<CFG> =>
  new Bundler({
    args,
    build,
    config: createConfig(args, env),
    server: server(args),
  })

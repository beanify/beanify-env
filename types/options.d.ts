import { Beanify, PluginDoneCallback, PluginOptions } from 'beanify'

export class EnvironmentOptions extends PluginOptions {
  schema: Record<string, unknown>
  data?: Record<string, unknown>
  env?: boolean
  dotenv?: boolean | Record<string, unknown>
}

export type BeanifyEnv = (
  beanify: Beanify,
  opts: EnvironmentOptions,
  done: PluginDoneCallback
) => Promise<void>

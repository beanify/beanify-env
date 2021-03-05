import { Beanify, PluginDoneCallback, PluginOptions } from 'beanify'
import { JSONSchemaType } from 'ajv'

export class EnvironmentOptions extends PluginOptions {
  schema: JSONSchemaType<Record<string, any>, true>
  data?: Record<string, unknown>
  env?: boolean
  dotenv?: boolean
}

export type BeanifyEnv = (
  beanify: Beanify,
  opts: EnvironmentOptions,
  done: PluginDoneCallback
) => Promise<void>

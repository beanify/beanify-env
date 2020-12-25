import { Beanify } from 'beanify'

import { BeanifyEnv, EnvironmentOptions } from './types/options'

declare const env: BeanifyEnv

export = env

declare module 'beanify' {
  interface BeanifyPlugin {
    (plugin: BeanifyEnv, opts: EnvironmentOptions): Beanify
  }

  interface Beanify {
    $env: Record<string, unknown>
  }
}

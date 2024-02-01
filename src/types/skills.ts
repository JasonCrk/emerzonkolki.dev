export type Skill =
  | 'javascript'
  | 'typescript'
  | 'react'
  | 'angular'
  | 'tailwindcss'
  | 'materialui'
  | 'bootstrap'
  | 'nodejs'
  | 'expressjs'
  | 'java'
  | 'spring boot'
  | 'python'
  | 'django'
  | 'mysql'
  | 'postgresql'
  | 'mongodb'
  | 'docker'
  | 'kubernetes'

export const skillTagStyleClasses = {
  javascript: 'bg-[#f7e0251a] border-[#f7e025] text-[#f7e025]',
  typescript: 'bg-[#377cc81a] border-[#377cc8] text-[#377cc8]',
  react: 'bg-[#00d8ff1a] border-[#00d8ff] text-[#00d8ff]',
  angular: 'bg-[#f50b481a] border-[#f50b48] text-[#f50b48]',
  tailwindcss: 'bg-[#38bdf81a] border-[#38bdf8] text-[#38bdf8]',
  materialui: 'bg-[#007fff1a] border-[#007fff] text-[#007fff]',
  bootstrap: 'bg-[#800af91a] border-[#800af9] text-[#800af9]',
  nodejs: 'bg-[#23b45d1a] border-[#23b45d] text-[#23b45d]',
  expressjs:
    'dark:bg-[#ffffff1a] dark:border-white dark:text-white bg-[#0000001a] border-dark-900 text-dark-900',
  java: 'bg-[#0175bd1a] border-[#0175bd] text-[#0175bd]',
  'spring boot': 'bg-[#6db33f1a] border-[#6db33f] text-[#6db33f]',
  python: 'bg-[#3979ab1a] border-[#3979ab] text-[#3979ab]',
  django: 'bg-[#27ab781a] border-[#27ab78] text-[#27ab78]',
  mysql: 'bg-[#00678f1a] border-[#00678f] text-[#00678f]',
  postgresql: 'bg-[#3367911a] border-[#336791] text-[#336791]',
  mongodb: 'bg-[1a] border-[] text-[]',
  docker: 'bg-[#2497ed1a] border-[#2497ed] text-[#2497ed]',
  kubernetes: 'bg-[#2e6ce61a] border-[#2e6ce6] text-[#2e6ce6]'
}

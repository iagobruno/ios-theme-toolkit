const pkg = require('../package.json')
const inquirer = require('inquirer')
const fs = require('fs')

String.prototype.splice = function(start, delCount, newSubStr) {
  return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
}

/**
 * Perguntas a serem feitas sobre o novo componente.
 * Ver mais em: https://github.com/SBoudrias/Inquirer.js
 */
const QUESTIONS = [
  {
    type: 'input',
    name: 'componentName',
    message: 'Nome do componente:'
  }
]

/**
 * Um array com os templates dos arquivos que devem ser criados.
 * Cada item deve ser um objeto e cada objeto deve conter duas propriedades:
 * "path" com o caminho e o nome do arquivo e "template" com o conteúdo do arquivo.
 *
 * Use o padrão mustache (usando 4 cochetes) para substituir pelas repostas dadas pelo usuário.
 *
 * OBSERVAÇÃO: Cuidado para não deixar "escapar" nenhum template literal ("${variable}").
 */
const FILES = [
  {
    path: './src/components/{{componentName}}/{{componentName}}.js',
    template: `
    import React from 'react'
    import PropTypes from 'prop-types'
    import { mapClassList } from '../../Utils'

    /**
     * {{componentName}} component.
     *
     * @since ${pkg.version}
     * @see https://httpiago.github.io/ios-theme-toolkit/#/components/{{componentName}}
     */
    export default function {{componentName}}({ children, color, className: aditionalClasses, ...rest }) {

      const prefix = 'card'
      const classes = mapClassList({
        // [\`\${prefix}--\${color}\`]: color,
      })

      return (
        <div
          className={\`\${prefix} \${classes} \${aditionalClasses}\`}
          {...rest}
        >{children}</div>
      )
    }

    {{componentName}}.defaultProps = {
      className: ''
    }

    {{componentName}}.propTypes = {
      /** Aditional classes. */
      className: PropTypes.string,
    }

    `
  },
  {
    path: './src/components/{{componentName}}/{{componentName}}.less',
    template: `
      @import '../../customizations.less';

      // Default style

    `
  },
  {
    path: './src/components/{{componentName}}/{{componentName}}.mdx',
    template: `
      ---
      name: {{componentName}}
      route: /components/{{componentName}}
      menu: Componentes
      ---

      import { Playground, PropsTable } from 'docz'
      import { {{componentName}} } from '../../index.js'
      import '../../../dist/styles.css'

      # {{componentName}}

      To use this component, simply import it into any file and pass the [modifiers](#/#props) in the properties.

      \`\`\`jsx
      import \{ {{componentName}} \} from 'ios-theme-toolkit'

      export default () => (
        <{{componentName}} />
      )
      \`\`\`

      ## Examples

      <Playground>
        <{{componentName}} />
      </Playground>

      ## Props

      <PropsTable of={ {{componentName}} } />

      All the properties which are not listed above will be transferred to the element tag, so, It accepts all props which native button support.
    `
  }
]

;(async () => {
  // Iniciar o questionário
  const ANSWERS = await inquirer.prompt(QUESTIONS)

  // Gerar os arquivos com base nas respostas
  await require('./generate-files')(ANSWERS, FILES)

  // Adicionar a importação e exportação do novo componente na arquivo ./src/index.js
  const oldContent = fs.readFileSync('./src/index.js', 'utf8')
  const matchs = oldContent.match(/import .+ from \'.+\'/g)
  const lastImportInTheFile = RegExp(matchs[matchs.length - 1]).exec(oldContent)

  const newContent = oldContent
    .splice(-3, 0, `\n  ${ANSWERS.componentName},`)
    .replace(lastImportInTheFile, `${lastImportInTheFile}\nimport ${ANSWERS.componentName} from \'\.\/components\/${ANSWERS.componentName}\/${ANSWERS.componentName}\'`)

  fs.writeFileSync('./src/index.js', newContent, (err) => {
    if(err) console.error('Erro ao salvar o arquivo "./src/index.js"', err);
  })
})()
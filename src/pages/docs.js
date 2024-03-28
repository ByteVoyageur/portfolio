// app/docs.js
import SwaggerUI from 'swagger-ui-react'
import 'swagger-ui-react/swagger-ui.css'
import YAML from 'yamljs'

const swaggerDocument = YAML.load('./public/swagger.yaml')

const Docs = () => <SwaggerUI spec={swaggerDocument} />

export default Docs

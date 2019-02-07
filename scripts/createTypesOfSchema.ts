import {generateTypeScriptTypes} from 'graphql-schema-typescript';
import * as fs from "fs";

// todo: improve code.

const inputPath = "./src/graphql/schema.graphqls";
const outputPath = "./src/graphql/schema.ts";
const outputPathTypeDefs = "./src/graphql/typeDefs.ts";

const schema = fs.readFileSync(inputPath, "UTF-8");

async function createGraphQLFiles() {
    await generateTypeScriptTypes(schema, outputPath, {
        customScalarType: {
            "__typename": "string"
        }
    })
        .then(() => {
            console.log('DONE');
        })
        .catch(err => {
            console.error(err);
            process.exit(1);
        });

    const typeDefsContentString = `export const typeDefs = \`\n ${schema.trim()}\n\`;\n`;
    fs.writeFileSync(outputPathTypeDefs, typeDefsContentString, "UTF-8");

    process.exit(0);
}


createGraphQLFiles();
import {
  createConnection,
  TextDocuments,
  TextDocument,
  Diagnostic,
  DiagnosticSeverity,
  ProposedFeatures
} from 'vscode-languageserver'
import { parse, lint, TextSpanError } from 'aoe2-rms-parser'

// Create a connection for the server. The connection uses Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all)

// Create a simple text document manager. The text document manager
// supports full document sync only
const documents = new TextDocuments()

connection.onInitialize(() => ({
  capabilities: { textDocumentSync: documents.syncKind }
}))

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent((change: { document: TextDocument }) => {
  validateTextDocument(change.document)
})

async function validateTextDocument (textDocument: TextDocument): Promise<void> {
  try {
    const { ast, errors } = parse(textDocument.getText())
    const diagnostics = errors.map(errorToDiagnostic)
    if (diagnostics.length === 0) diagnostics.push(...lint(ast).map(errorToDiagnostic))

    connection.sendDiagnostics({ uri: textDocument.uri, diagnostics })
  } catch (error) {
    // Handle parsing errors gracefully
    const diagnostics: Diagnostic[] = [{
      severity: DiagnosticSeverity.Error,
      range: {
        start: { line: 0, character: 0 },
        end: { line: 0, character: 0 }
      },
      message: `Parse error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      source: 'rms'
    }]
    connection.sendDiagnostics({ uri: textDocument.uri, diagnostics })
  }
}

function errorToDiagnostic (error: TextSpanError): Diagnostic {
  return {
    severity: DiagnosticSeverity.Error,
    range: {
      start: { line: error.boundaries.start.line - 1, character: error.boundaries.start.col },
      end: { line: error.boundaries.end.line - 1, character: error.boundaries.end.col }
    },
    message: error.message,
    source: error.name === 'LintError' ? 'rms-lint' : 'rms'
  }
}

documents.listen(connection)
connection.listen()

import * as fs from 'fs'
import * as os from 'os'

const log = fs.createWriteStream(`${os.homedir()}/lsp.log`)

export default {
    write: (message: object | unknown) => {
        if (typeof message === "object") {
            log.write(JSON.stringify(message))
        }
        else {
            log.write(message)
        }
        log.write('\n')
    }
}
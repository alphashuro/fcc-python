import Sk from 'skulpt'
import Rx from 'rxjs'

function builtinRead(x) {
  if (
    Sk.builtinFiles === undefined ||
    Sk.builtinFiles['files'][x] === undefined
  )
    throw new Error("File not found: '" + x + "'")
  return Sk.builtinFiles['files'][x]
}

/**
 * 
 * @param {String} text 
 * @returns {Observable<String>} 
 */
export const compile = text =>
  Rx.Observable.create(obs => {
    try {
      Sk.configure({ output: obs.next.bind(obs), read: builtinRead })

      Sk.importMainWithBody('<stdin>', false, text, true)
    } catch (e) {
      obs.error(e)
    }
  })

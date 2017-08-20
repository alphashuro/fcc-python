import Sk from 'skulpt'
import Rx from 'rxjs'

Sk.externalLibraries = {
  numpy: {
    path:
      'https://raw.githubusercontent.com/ebertmi/skulpt_numpy/master/dist/numpy/__init__.js',
    dependencies: [
      'https://raw.githubusercontent.com/ebertmi/skulpt_numpy/master/dist/numpy/random/__init__.js'
    ]
  },
  matplotlib: {
    path:
      'https://raw.githubusercontent.com/ebertmi/skulpt_matplotlib/master/matplotlib/__init__.js'
  },
  'matplotlib.pyplot': {
    path:
      'https://raw.githubusercontent.com/ebertmi/skulpt_matplotlib/master/matplotlib/pyplot/__init__.js',
    dependencies: [
      'http://www.skulpt.org/static/primeronoo/skulpt/external/deps/d3.min.js'
    ]
  }
}

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

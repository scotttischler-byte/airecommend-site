import json
w=open('src/qrcode.lib.js').read()+'\n'+open('src/worker.src.js').read(); l=open('src/landing.html').read()
open('dist_worker.js','w').write("const LANDING = "+json.dumps(l)+";\n"+w)

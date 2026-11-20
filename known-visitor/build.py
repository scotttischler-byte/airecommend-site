import json
w=open('src/worker.src.js').read(); l=open('src/landing.html').read()
open('dist_worker.js','w').write("const LANDING = "+json.dumps(l)+";\n"+w)

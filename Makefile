.PHONY: build cases ergogen

build: ergogen cases

cases:
	npm run build:case -- cases/cork_base.jscad
	npm run build:case -- cases/gasket.jscad
	npm run build:case -- cases/pcb.jscad
	npm run build:case -- cases/silicone_base.jscad
	npm run build:case -- cases/switch_plate.jscad

ergogen:
	npm run build:ergogen

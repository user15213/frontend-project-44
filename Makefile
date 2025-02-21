.PHONY: install deps-install deps-update lint publish

install: deps-install
	npx simple-git-hooks

run:
	bin/nodejs-package.js 10

deps-install:
	npm ci --legacy-peer-deps

deps-update:
	npx ncu -u

lint:
	npx eslint .

publish:
	npm publish

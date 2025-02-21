.PHONY: install deps-install deps-update lint publish test

install: deps-install
	npx simple-git-hooks

deps-install:
	npm ci --legacy-peer-deps

deps-update:
	npx ncu -u

lint:
	npx eslint .

test:
	npm test

publish:
	npm publish

install:
	npm ci

publish:
	npm publish --dry-run
	node bin/brain-games.js

lint:
	npx eslint . --fix




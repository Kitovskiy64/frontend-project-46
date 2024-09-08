install:
	npm ci
publish:
	npm publish --dry-run
test:
	npm test
lint:
  npm lint
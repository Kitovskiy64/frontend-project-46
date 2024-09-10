install:
	npm ci
publish:
	npm publish --dry-run
test:
	npm test
lint:
	npx eslint .
gendiff:
	node ./src/gendiff.js ./__fixtures__/file1.json ./__fixtures__/file2.json

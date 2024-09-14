install:
	npm ci
publish:
	npm publish --dry-run
test:
	npm test
lint:
	npx eslint .
gendiff:
	node ./src/cli.js ./__fixtures__/file1.json ./__fixtures__/file2.json
gendiff2:
	node ./src/cli.js ./__fixtures__/file1.yml ./__fixtures__/file2.yml

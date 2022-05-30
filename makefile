

ensure-dependencies:
	@echo "Ensuring docker is installed..."
	@docker info

brand:
	@echo "Creating our hello manifest file..."
	@node_modules/make-manifest/bin/make-manifest
	@cat ./manifest.json

package:
	@echo "Building our hello docker image..."
	@docker build --tag hello .
	@docker images

qa:
	@echo "Checking that our hello tests dont fail..."
	@npm run qa
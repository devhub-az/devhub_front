up: docker-up
down: docker-down
prod: docker-up-prod
restart: down up
install: yarn-install
update: yarn-upgrade

docker-up:
	docker-compose up -d

docker-up-prod:
	IMAGE_TAG=latest docker-compose -f docker-compose-production.yml up -d

docker-build-prod:
	IMAGE_TAG=latest docker-compose -f docker-compose-production.yml build

docker-down:
	docker-compose down --remove-orphans

docker-down-clear:
	docker-compose down -v --remove-orphans

docker-pull:
	docker-compose pull

docker-build:
	DOCKER_BUILDKIT=1 COMPOSE_DOCKER_CLI_BUILD=1 docker-compose build --build-arg BUILDKIT_INLINE_CACHE=1 --pull

yarn-install:
	docker-compose run --rm node yarn install

yarn-upgrade:
	docker-compose run --rm node yarn upgrade

docker-down-clear:
 	COMPOSE_PROJECT_NAME=devhub docker-compose -f docker-compose.yml down -v --remove-orphans

push:
	docker-compose push

banner:
	@echo "oooooooooo.                        ooooo   ooooo              .o8      "
	@echo "888      Y8b                        888     888               888      "
	@echo "888      888  .ooooo.  oooo  oooo   888     888   oooo  oooo  888oooo.     Using DevHub at work? Work for Devhub."
	@echo "888      888 d88   88b  88.  .88    888ooooo888   888   888   d88   88b     https://github.com/hose1021/DevHub"
	@echo "888      888 888ooo888   88..88     888     888   888   888   888   888"
	@echo "888     d88  888   .8     888       888     888   888   888   888   888            Made with ❤ by Hose"
	@echo "o888bood8P   Y8bod8P       8       o888o   o888o  V88VV8P     Y8bod8P"

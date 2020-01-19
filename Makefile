install:
	docker-compose -f docker-compose.builder.yml run --rm install
dev:
	docker-compose up
setup:
	docker volume create nodemodules
sh:
	docker-compose run --rm dev /bin/sh
init:
	docker-compose run --rm dev npm init

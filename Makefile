# Установка зависимостей
install:
	npm ci

# Публикация (с флагом --dry-run для теста)
publish:
	npm publish --dry-run
	node bin/brain-games.js

# Линтинг кода с автоматическим исправлением
lint:
	npx eslint . --fix

# Запуск тестов
test:
	npm test

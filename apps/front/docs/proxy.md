## Проксирование http запросов

Если локально проект развернуть сложно, или не представляется возможным (слабый комп для поднятия всего стека) - можно настроить проксирование запросов на развернутую тестовую площадку. 

Для этого нужно: 

- прописать в .env переменную API_URL роут на который нужно слать запрос

- прописать в HTTP_AUTH данные для http авторизации

- задать дополнительные доступы, если есть, в createProxyMiddleware

- При разработке использовать команду ```npm run proxy```
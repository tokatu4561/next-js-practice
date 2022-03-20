my-docker-laravel
Laravelプロジェクト用　Docker使用したLEMP環境

# 手順
## コンテナを作る
docker compose up -d --build

## コンテナに入ってライブラリをインストール
docker compose exec app bash 

composer install

## envファイルを作成 .env.exampleのテンプレートをコピー
cp .env.example .env

## storage bootstrap/cacheに書き込み権限を与える
chmod -R 777 storage bootstrap/cache

## 　終了時　
docker compose down

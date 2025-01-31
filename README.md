# learn-monorepo-npm

## Prerequisites

|  Module | Ver.                     |
| ------: | ------------------------ |
| Node.js | `./.node-version` を参照 |
|    npm | `./package.json` を参照  |

### Node.js

本リポジトリで利用可能な Node.js のバージョンは `./.node-version` ファイルにて管理しているため、開発者にはこのファイルをサポートしている Node.js バージョン管理ツールの利用を推奨します。以下は推奨するバージョン管理ツールの例です。

- [nodenv](https://github.com/nodenv/nodenv)
- [n](https://github.com/tj/n)
- [asdf](https://github.com/asdf-vm/asdf)
- [NVS](https://github.com/jasongin/nvs)
- [fnm](https://github.com/Schniz/fnm)

### npm

本リポジトリではパッケージマネージャーに npm を使用します。corepack コマンドを実行して npm を有効化します。

```bash
corepack enable
```

## Install dependencies

```bash
npm install
```

## Develop

### Package (application) structure

アプリケーションとしてビルド・起動するパッケージは以下の通り:

- `@learn-monorepo-npm/app1`
- `@learn-monorepo-npm/app2`
- `@learn-monorepo-npm/catalog`

上記以外は API や共通ライブラリの実装となっており、単独で利用することはありません。

### Run

```bash
npm (app1|app2|catalog) start
# e.g. npm app1 start
```

上記コマンドで指定のアプリケーションが起動し、web ブラウザも自動で立ち上がります。起動中はファイルの変更を検知して自動的にリビルド、リロードされます。

## Build

### Package (application) structure

アプリケーションとしてビルドするパッケージは以下の通り:

- `@learn-monorepo-npm/app1`
- `@learn-monorepo-npm/app2`
- `@learn-monorepo-npm/catalog`

### Build

```bash
npm (app1|app2|catalog) build
# e.g. npm app1 build
```

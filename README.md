# **Next.js** with **Stripe** EC Sample

## :memo: Requirement
- Docker
- Stripe
   - Register Stripe Account

## :wrench: Usage
1. リポジトリを cloneする
   ```sh
   $ git clone git@github.com:Wotw-Potp/sample-nextjs-ec.git
   ```

2. 環境変数の設定を行う
   1. `.env.local`を作成
      ```sh
      $ cp project/.env.sample project/.env.local
      ```

   2. `Stripe`の **API Key**を `.env.local`に設定

     |変数名|説明|
     |:--|:--|
     |STRIPE_API_KEY_PUBLIC|`公開可能キー`(pk_xxx)|
     |STRIPE_API_KEY_SECRET|`シークレットキー`(sk_xxx) or `制限付きのキー`(rk_xxx)|

3. **Docker** 起動 & **Next.js** 開発サーバー起動
   - Docker起動
      ```sh
      $ sh shell/docker/up.sh
      ```

   - **Node.js** コンテナへ shellアタッチ
      ```sh
      $ sh shell/docker/attach.sh
      ```

   - **Node.js** コンテナ内で依存パッケージのインストール & 開発サーバー起動
      ```sh
      # /var/www/project yarn && yarn dev
      ```

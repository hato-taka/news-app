# 環境構築

新しいプロジェクトを作成する際は、以下のコマンドを使用します:

```bash
npx create-expo-app your-project-name
```

## expo-cliの非推奨化
expo-cliのグローバルインストールは推奨されなくなりました。これは以下の理由によります:
- 新しいExpo CLIがプロジェクト内のexpoパッケージにバンドルされるようになった
- より柔軟で一貫性のある開発環境を提供するため
- Node.jsの新しいバージョン（特にNode.js 17以降）をサポートするため

# npx expo <command>

## start
開発サーバーを起動します。

## run:ios / run:android

## prebuild

## install

パッケージのinstall
```bash
npx expo install <package-name>
```

## export

# perplexity
詳細はこちら: 
https://www.perplexity.ai/search/react-native-te-ri-ben-yu-none-xcQ0xmWlQNmZyvjohlqKtQ


# 開発手順

## 必要なライブラリのインストール
```bash
npx expo install axios react-native-webview @react-navigation/native @react-navigation/stack
```

## newsAPIの登録
https://newsapi.org/

![image](https://github.com/user-attachments/assets/c841b746-0abb-4ca4-9251-28477517b0f9)

＊Expoプロジェクトでは、公開する環境変数の名前をEXPO_PUBLIC_で始める必要があります  
アプリケーションコード内で直接process.envを使用して環境変数にアクセスできます
```ts
const apiKey = process.env.EXPO_PUBLIC_API_KEY;
console.log(apiKey);
```

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
# news-app

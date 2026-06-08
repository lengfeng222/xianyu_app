# 闲鱼 APP 打包说明

## Android APK（本地打包）

已生成过 `android/` 目录时，可直接打包：

- **方式一**：双击运行项目根目录下的 `build-apk.bat`
- **方式二**：在项目根目录执行  
  `npm run build:apk:local`

APK 输出路径：

```
android/app/build/outputs/apk/release/app-release.apk
```

若本机 JDK 路径不是 `C:\Program Files\Eclipse Adoptium\jdk-17.0.18.8-hotspot`，请修改 `build-apk.bat` 中的 `JAVA_HOME`。

首次打包或没有 `android/` 目录时，需先执行：

```bash
npx expo prebuild --platform android --no-install
```

然后再执行上述打包方式之一。

---

## Android APK（EAS 云端打包）

需要先登录 Expo 账号：

```bash
npx eas login
```

然后执行：

```bash
npm run build:apk
```

或：

```bash
npx eas build --platform android --profile preview
```

---

## iOS（无法在 Windows 上直接打包）

**在 Windows 上无法直接打出 iOS 安装包（.ipa）。**  
iOS 构建必须使用 **macOS + Xcode**，或使用 **EAS 云端构建**。

### 使用 EAS 打 iOS 包（推荐，无需 Mac）

1. 登录 Expo：`npx eas login`
2. 在项目根目录执行：
   ```bash
   npx eas build --platform ios --profile production
   ```
3. 在 [Expo 控制台](https://expo.dev) 查看构建状态并下载 .ipa。

首次使用需在 `eas.json` 中配置好 iOS 的 profile（如 production），并确保有 Apple 开发者账号用于签名。

### 在 Mac 上本地打 iOS 包

在 **Mac** 上安装 Xcode 后，在项目根目录执行：

```bash
npx expo prebuild --platform ios
npx expo run:ios --configuration Release
```

或在 Xcode 中打开 `ios/xianyu_app.xcworkspace` 进行 Archive 与导出。

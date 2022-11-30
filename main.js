const { app, BrowserWindow } = require('electron')
const WinState = require('electron-win-state').default


const createWindow = () => {

  const winState = new WinState({
    defaultWidth: 1000,
    defaultHeight: 800
  })

  const win = new BrowserWindow({
    ...winState.winOptions,
    // 隐藏系统标题栏
    frame: false,
    hasShadow: true,
    // 显示系统自带的关闭按钮
    autoHideMenuBar: true,
    titleBarStyle: 'hiddenInset'
  })

  win.loadURL("http://localhost:5173")

  // 默认打开开发者模式
  win.webContents.openDevTools()

  // 加载完成才打开窗口
  // win.on('ready-to-show', () => {
  //   win.show()
  // })

  // 使用窗口管理
  winState.manage(win)
}


app.whenReady().then(() => {
  createWindow()
})

// 当所有都关闭的时候, 创建一个页面
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// 所有都关闭的时候就直接退出
app.on('window-all-closed', () => {
  if (process.platform === 'darwin') {
    app.quit()
  }
})
